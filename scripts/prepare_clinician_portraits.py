#!/usr/bin/env python3
"""Build real clinician portraits with one genuinely Lisa-derived garden backdrop.
Never synthesize or alter anyone's face. All composition is geometric, alpha and lighting.
"""
import io, json, os, statistics
import numpy as np
import requests, cv2
from PIL import Image, ImageOps, ImageFilter, ImageDraw, ImageFont
from rembg import new_session, remove

W,H=720,900
LISA="https://static.wixstatic.com/media/9df129_a8be2a6dcc5f44029e859d71512b9881~mv2.jpg"
PEOPLE=[
 ("Lisa Mayatt","lisa-mayatt",LISA),
 ("Dr Gopal Venkat","dr-gopal-venkat","https://static.wixstatic.com/media/1e4c48_85c609d40029400d87679d95036e22c7~mv2.jpg"),
 ("Dr Joseph Chukwu","dr-joseph-chukwu","https://static.wixstatic.com/media/1e4c48_03e654c846ed44c1b51be1b54df8c0cc~mv2.jpg"),
 ("Dr Aimee Hayter","dr-aimee-hayter","https://static.wixstatic.com/media/9df129_ca30c81c50864685b8b236e5c12ed353~mv2.jpg"),
 ("Dr Daniela Di Basilio","dr-daniela-di-basilio","https://static.wixstatic.com/media/1e4c48_872f3d3716324c9f8dea44e262e15468~mv2.png"),
 ("Karen Cooper","karen-cooper","https://static.wixstatic.com/media/aed9b4_5026a174c60f4660984df19c00fde9ee~mv2.jpg"),
 ("Beccy Muggeridge","beccy-muggeridge","https://static.wixstatic.com/media/1e4c48_9944b909556a40e9bf73b4cc3ea38282~mv2.jpeg"),
 ("Deepika Sharma","deepika-sharma","https://static.wixstatic.com/media/1e4c48_f78a79dd001343fda7bd1c16c190e542~mv2.png"),
 ("Jess Wilson","jess-wilson","https://static.wixstatic.com/media/1e4c48_42f988def9b6480ea93fbf16296e70a0~mv2.jpg"),
 ("Sarah Grieve","sarah-grieve","https://static.wixstatic.com/media/1e4c48_766d102855fe4181b93bdd44b35c4a95~mv2.jpg")
]

def download(url):
    r=requests.get(url,timeout=50,headers={"User-Agent":"Mozilla/5.0"})
    r.raise_for_status()
    im=Image.open(io.BytesIO(r.content)).convert("RGB")
    if im.width > 1300 or im.height > 1600:
        im.thumbnail((1300,1600))
    return im

def human_alpha(rgb,session):
    mask=remove(rgb,session=session,only_mask=True)
    return mask.convert("L")

def find_face(im):
    gray=cv2.cvtColor(np.asarray(im),cv2.COLOR_RGB2GRAY)
    cc=cv2.CascadeClassifier(cv2.data.haarcascades+"haarcascade_frontalface_default.xml")
    faces=cc.detectMultiScale(gray,scaleFactor=1.07,minNeighbors=3,minSize=(40,40))
    if len(faces)==0:
        return None
    hh,ww=gray.shape
    faces=sorted(faces,key=lambda f:f[2]*f[3] - abs(f[0]+f[2]/2-ww/2)*.5,reverse=True)
    x,y,w,h=map(int,faces[0])
    return [x,y,w,h]

os.makedirs("images/clinicians",exist_ok=True)
session=new_session("u2net_human_seg")
lisa=download(LISA)
lisa_mask=human_alpha(lisa,session)
# Remove Lisa from her own *real garden photo* so the background remains the same
# foliage, depth of field, colours and highlights, not a small upscaled crop.
# Inpainting only replaces pixels hidden by Lisa; surrounding authentic garden stays.
try:
    from simple_lama_inpainting import SimpleLama
    binary=(np.array(lisa_mask)>70).astype(np.uint8)*255
    dilated=cv2.dilate(binary,np.ones((31,31),np.uint8),iterations=1)
    background=SimpleLama()(lisa,Image.fromarray(dilated,"L"))
    print("LaMa inpainting successful",lisa.size,flush=True)
except Exception as exc:
    print("LaMa fallback due to",repr(exc),flush=True)
    # Never show Lisa ghosted behind clinicians if the generative inpainting
    # library is inaccessible: tile two authentic unoccupied garden borders.
    lw,lh=lisa.size
    left=lisa.crop((0,0,max(100,int(lw*.23)),lh))
    right=lisa.crop((min(lw-100,int(lw*.78)),0,lw,lh))
    halves=Image.new("RGB",lisa.size)
    halves.paste(ImageOps.fit(left,(lw//2,lh)),(0,0))
    halves.paste(ImageOps.fit(right,(lw-lw//2,lh)),(lw//2,0))
    background=halves.filter(ImageFilter.GaussianBlur(32))
# Match the original lens blur; this is the same garden, not another artificial scene.
garden=ImageOps.fit(background,(W,H),method=Image.Resampling.LANCZOS,centering=(.50,.44))
garden=garden.filter(ImageFilter.GaussianBlur(4))
garden.save("images/clinicians/lisa-garden-backdrop.webp","WEBP",quality=90)
metadata=[]
for name,slug,url in PEOPLE:
    original=lisa if slug=="lisa-mayatt" else download(url)
    alpha=lisa_mask if slug=="lisa-mayatt" else human_alpha(original,session)
    mask_array=np.array(alpha)
    mask_array[mask_array<12]=0
    alpha=Image.fromarray(mask_array).filter(ImageFilter.GaussianBlur(.7))
    bbox=alpha.getbbox()
    if not bbox:
        raise ValueError("No person mask: "+name)
    face=find_face(original)
    if face:
        fx,fy,fw,fh=face
        base_scale=207/fw
        face_ok=True
    else:
        # Fallback from top third of foreground width; report the approximation.
        width_at_head=max(50,bbox[2]-bbox[0])
        base_scale=280/max(width_at_head*.65,55)
        face_ok=False
        fx=original.width//2;fy=bbox[1];fw=fh=0
    # At same head size, all portraits share the same crown margin and similar
    # chest/shoulder coverage. Do not shrink faces just to fit full torsos.
    base_scale=min(max(base_scale,.25),4.2)
    subject_h=bbox[3]-bbox[1]
    cover_scale=(H-128)/max(subject_h,1)
    scale=max(base_scale,min(cover_scale,base_scale*1.13))
    # Use crown instead of image top so tall selfies (Daniela/Sarah) no longer
    # have huge empty space above heads.
    top=112
    left=(W/2 - (fx+fw/2)*scale) if face else (W/2 - (bbox[0]+bbox[2])/2*scale)
    origin_y=top-bbox[1]*scale
    neww=max(1,round(original.width*scale))
    newh=max(1,round(original.height*scale))
    # Crop source before resize: keep only the pixels which will appear in output.
    # This is lossless wrt visible image and avoids scaling enormous selfies.
    src_left=max(0,int((-left-4)/scale))
    src_top=max(0,int((-origin_y-4)/scale))
    src_right=min(original.width,int((W-left+4)/scale)+1)
    src_bottom=min(original.height,int((H-origin_y+4)/scale)+1)
    if src_right<=src_left or src_bottom<=src_top:
        raise ValueError("Subject outside canvas "+name)
    section=original.crop((src_left,src_top,src_right,src_bottom))
    asection=alpha.crop((src_left,src_top,src_right,src_bottom))
    rw=max(1,round(section.width*scale));rh=max(1,round(section.height*scale))
    rgb=section.resize((rw,rh),Image.Resampling.LANCZOS)
    amask=asection.resize((rw,rh),Image.Resampling.LANCZOS)
    ox=round(left+src_left*scale); oy=round(origin_y+src_top*scale)
    # Natural directional contact shadow projected into the real garden.
    # Only behind the hair and shoulders; transparent edges remain soft.
    projected=Image.new("L",(W,H),0)
    projected.paste(amask,(ox,oy))
    shadow=projected.filter(ImageFilter.GaussianBlur(12))
    shadownp=np.array(shadow).astype(np.float32)*.22
    # Shadows less dominant on lower shoulder edges; no harsh cutout halos.
    shadow=Image.fromarray(np.uint8(np.clip(shadownp,0,255)))
    shifted=Image.new("L",(W,H),0)
    shifted.paste(shadow,(7,4))
    tint=Image.new("RGBA",(W,H),(22,43,24,0))
    tint.putalpha(shifted)
    scene=garden.convert("RGBA")
    scene.alpha_composite(tint)
    subject=rgb.convert("RGBA")
    subject.putalpha(amask)
    scene.alpha_composite(subject,(ox,oy))
    out=scene.convert("RGB")
    out.save(f"images/clinicians/{slug}.webp","WEBP",quality=91,method=6)
    md={"name":name,"slug":slug,"source_size":original.size,
        "face":face,"face_detected":face_ok,"scale":round(scale,3),
        "head_top_px":top,
        "target_face_width":round(fw*scale,1) if face else None,
        "subject_bottom_px":round(bbox[3]*scale+origin_y)}
    metadata.append(md)
    print("PORTRAIT",json.dumps(md),flush=True)
# Portable QA image to inspect all ten side-by-side before linking.
cols=5
tilew,tileh=240,323
sheet=Image.new("RGB",(cols*tilew,2*tileh),(250,248,244))
draw=ImageDraw.Draw(sheet)
for i,entry in enumerate(metadata):
    px=(i%cols)*tilew;py=(i//cols)*tileh
    img=Image.open(f"images/clinicians/{entry['slug']}.webp")
    sheet.paste(img.resize((240,300),Image.Resampling.LANCZOS),(px,py))
    draw.rectangle((px,py+300,px+tilew,py+323),fill=(240,234,219))
    draw.text((px+5,py+304),entry["name"],fill=(25,53,40))
sheet.save("images/clinicians/portrait-review.jpg",quality=88,optimize=True)
with open("images/clinicians/portrait-metadata.json","w") as f:
    json.dump(metadata,f,indent=2)
print("All 10 original clinician portraits prepared; review sheet saved.",flush=True)
