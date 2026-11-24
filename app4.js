const preBookingNext=`<section class="section alt prebooking-next">
  <div class="prebooking-next-inner">
    <div class="prebooking-next-heading">
      <div class="eyebrow">After you submit your form</div>
      <h2>What happens next?</h2>
      <p>Our clinical team reviews your information before advising on the most appropriate next step.</p>
    </div>
    <div class="prebooking-next-grid">
      <article class="prebooking-next-card">
        <div class="prebooking-next-label">01 · Clinical review</div>
        <h3>Typically 1–2 working days</h3>
        <p>Forms are usually reviewed within 1–2 working days, often sooner. The team then advises you on your next step.</p>
      </article>
      <article class="prebooking-next-card">
        <div class="prebooking-next-label">02 · If a call would help</div>
        <h3>A personal invitation from Lisa</h3>
        <p>If a free 15-minute telephone consultation is appropriate, Lisa emails you a private diary link. Appointments are not publicly self-bookable.</p>
      </article>
    </div>
    <div class="prebooking-next-urgent">
      <strong>Urgent enquiry?</strong>
      <span>Please also email Lisa directly at <a href="mailto:lisa@autismassessmentsfarnham.co.uk">lisa@autismassessmentsfarnham.co.uk</a>.</span>
    </div>
  </div>
</section>`;
const routes={'/':home,'/services':assessmentOverview,'/copy-of-faq':resources,'/recommended-services':resources,'/choose-your-assessment':assessmentOverview,'/adult-assessments':adult,'/child-young-person-assessments':child,'/adult-autism-assessment':adultAutism,'/adult-adhd-assessment':adultAdhd,'/combined-adult-autism-adhd-assessment':combinedAdult,'/child-autism-assessment':childAutism,'/child-adhd-assessment':childAdhd,'/combined-child-autism-adhd-assessment':combinedChild,'/autism-adhd-women':women,'/pda-demand-avoidant-presentation':pda,'/adult-pre-booking':`${header('Adult Autism & ADHD Pre-Booking Form','Initial information and triage for adults considering Autism, ADHD or a Combined assessment.')}<section class="section prebooking-main"><div class="soft-panel prebooking-panel"><h2>Complete the Adult Pre-Booking Form</h2><p>Our clinicians review this form manually. It is for initial triage only and is not diagnostic.</p><a class="btn" href="${adultForm}" target="_blank">Open Adult Pre-Booking Form</a></div></section>${preBookingNext}`,
'/child-pre-booking':`${header('Child & Young Person Autism / ADHD Pre-Booking Form','Initial information and triage for a child or young person where Autism, ADHD or a Combined assessment is being considered.')}<section class="section prebooking-main"><div class="soft-panel prebooking-panel"><h2>Complete the Child / Young Person Form</h2><p>Our clinicians review this form manually. It is for initial triage only and is not diagnostic.</p><a class="btn" href="${childForm}" target="_blank">Open Child / Young Person Form</a></div></section>${preBookingNext}`,
'/how-assessments-work':how,'/fees':fees,'/our-team':team,'/faq':faq,'/free-consultation':consultation,'/post-assessment-advice':post,'/local-resources':resources,'/privacy-policy':privacy,'/ehcp-expert-witness-reports':ehcp,'/contact':contact};
const seoMeta={
'/':{title:'Autism & ADHD Assessments Farnham, Surrey | Adults & Children',description:'Private Autism and ADHD assessments for adults and children in Farnham, Surrey. Welcoming clients from Guildford, Godalming, Aldershot and nearby areas.',canonical:'/'},
'/choose-your-assessment':{title:'Choose an Autism or ADHD Assessment | Farnham, Surrey',description:'Choose the right Autism, ADHD or combined assessment pathway for an adult, child or young person in Farnham, Surrey.',canonical:'/choose-your-assessment'},
'/adult-assessments':{title:'Adult Autism & ADHD Assessments | Farnham, Surrey',description:'Private adult autism, ADHD and combined assessments in Farnham, Surrey, welcoming clients from Guildford, Godalming, Fleet and surrounding areas.',canonical:'/adult-assessments'},
'/child-young-person-assessments':{title:'Child Autism & ADHD Assessments | Farnham, Surrey',description:'Private autism, ADHD and combined assessments for children in Farnham, Surrey, including families from Aldershot, Farnborough and Guildford.',canonical:'/child-young-person-assessments'},
'/adult-autism-assessment':{title:'Adult Autism Assessment | Farnham, Surrey',description:'Private adult autism assessment in Farnham, Surrey. Specialist multidisciplinary clinicians, face-to-face appointments and practical reports for nearby areas.',canonical:'/adult-autism-assessment'},
'/adult-adhd-assessment':{title:'Adult ADHD Assessment | Farnham, Surrey',description:'Private adult ADHD assessment in Farnham, Surrey with face-to-face clinic appointments, multidisciplinary review and practical reports.',canonical:'/adult-adhd-assessment'},
'/combined-adult-autism-adhd-assessment':{title:'Combined Adult Autism & ADHD Assessment | Farnham',description:'Combined Autism and ADHD assessment for adults in Farnham, Surrey where both conditions may be relevant.',canonical:'/combined-adult-autism-adhd-assessment'},
'/child-autism-assessment':{title:'Child Autism Assessment | Farnham, Surrey',description:'Private child autism assessments from age 2 in Farnham, Surrey. Specialist multidisciplinary clinic welcoming families across Surrey and North Hampshire.',canonical:'/child-autism-assessment'},
'/child-adhd-assessment':{title:'Child ADHD Assessment | Farnham, Surrey',description:'Private child ADHD assessments from age 5 at our Farnham, Surrey clinic. Experienced clinicians, clear reports and practical guidance.',canonical:'/child-adhd-assessment'},
'/combined-child-autism-adhd-assessment':{title:'Combined Child Autism & ADHD Assessment | Farnham',description:'Combined Autism and ADHD assessments for children and young people in Farnham, Surrey from age 5+.',canonical:'/combined-child-autism-adhd-assessment'},
'/autism-adhd-women':{title:'Autism & ADHD in Women and Girls | Farnham Assessments',description:'Specialist recognition of masking, subtle presentation and later recognition of Autism and ADHD in women and girls.',canonical:'/autism-adhd-women'},
'/pda-demand-avoidant-presentation':{title:'PDA Profile & Demand Avoidance | Autism Assessments Farnham',description:'Information about PDA and demand-avoidant presentations within Autism assessment pathways at our Farnham clinic.',canonical:'/pda-demand-avoidant-presentation'},
'/how-assessments-work':{title:'How Autism & ADHD Assessments Work | Farnham',description:'A clear step-by-step guide to Autism, ADHD and combined assessment pathways at Autism & ADHD Assessments Farnham.',canonical:'/how-assessments-work'},
'/fees':{title:'Autism & ADHD Assessment Fees | Farnham, Surrey',description:'Clear fees and current availability for Autism, ADHD and combined assessments for adults, children and young people in Farnham.',canonical:'/fees'},
'/our-team':{title:'Autism & ADHD Assessment Clinicians | Farnham Team',description:'Meet the experienced multidisciplinary clinicians delivering Autism and ADHD assessments in Farnham, Surrey.',canonical:'/our-team'},
'/faq':{title:'Autism & ADHD Assessment FAQs | Farnham, Surrey',description:'Answers to common questions about Autism and ADHD assessments, fees, reports, clinic appointments, PDA and female presentation.',canonical:'/faq'},
'/free-consultation':{title:'Free 15-Minute Assessment Consultation | Farnham',description:'After pre-booking review, arrange a free 15-minute telephone consultation where appropriate to discuss the next assessment step.',canonical:'/free-consultation'},
'/post-assessment-advice':{title:'Post-Assessment Autism & ADHD Support | Farnham',description:'Optional one-to-one post-assessment advice and strategy sessions following Autism or ADHD assessment in Farnham.',canonical:'/post-assessment-advice'},
'/local-resources':{title:'Autism & ADHD Resources and Signposting | Farnham',description:'Useful Autism and ADHD resources, support and local signposting for individuals and families around Farnham and Surrey.',canonical:'/local-resources'},
'/privacy-policy':{title:'Privacy Policy | Autism & ADHD Assessments Farnham',description:'Privacy and data handling information for Autism & ADHD Assessments Farnham.',canonical:'/privacy-policy'},
'/contact':{title:'Contact Autism & ADHD Assessments Farnham | Surrey',description:'Contact our autism and ADHD assessment clinic at The Annexe, 3 Leigh Lane, Farnham, Surrey GU9 8HP. Enquiries from surrounding Surrey and Hampshire areas welcome.',canonical:'/contact'},
'/ehcp-expert-witness-reports':{title:'Speech Therapy Farnham | EHCP & Expert Witness Support',description:'Speech Therapy Farnham specialist Speech, Language & Communication assessment, EHCP and expert witness support in Farnham, Surrey.',canonical:'/ehcp-expert-witness-reports'},
'/adult-pre-booking':{title:'Adult Autism & ADHD Pre-Booking Form | Farnham',description:'Start an adult Autism, ADHD or combined assessment enquiry with the pre-booking form for Autism & ADHD Assessments Farnham.',canonical:'/adult-pre-booking'},
'/child-pre-booking':{title:'Child Autism & ADHD Pre-Booking Form | Farnham',description:'Start a child or young person Autism, ADHD or combined assessment enquiry with the pre-booking form.',canonical:'/child-pre-booking'}
};
const legacyCanonical={
'/services':'/choose-your-assessment',
'/copy-of-faq':'/local-resources',
'/recommended-services':'/local-resources'
};
const liveOrigin='https://www.autismassessmentsfarnham.co.uk';

function setMeta(name,content){
  let el=document.querySelector('meta[name="'+name+'"]');
  if(!el){el=document.createElement('meta');el.setAttribute('name',name);document.head.appendChild(el)}
  el.setAttribute('content',content);
}
function setProperty(property,content){
  let el=document.querySelector('meta[property="'+property+'"]');
  if(!el){el=document.createElement('meta');el.setAttribute('property',property);document.head.appendChild(el)}
  el.setAttribute('content',content);
}
function updateSeo(path){
  const canonicalPath=legacyCanonical[path]||path;
  const data=seoMeta[canonicalPath]||{title:'Autism & ADHD Assessments Farnham',description:'Private Autism and ADHD assessments in Farnham, Surrey.',canonical:canonicalPath};
  document.title=data.title;
  setMeta('description',data.description);
  setProperty('og:title',data.title);
  setProperty('og:description',data.description);
  setProperty('og:type','website');
  setProperty('og:url',liveOrigin+data.canonical);
  setMeta('twitter:card','summary_large_image');
  setMeta('twitter:title',data.title);
  setMeta('twitter:description',data.description);
  let canonical=document.querySelector('link[rel="canonical"]');
  if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical)}
  canonical.href=liveOrigin+data.canonical;

  let schema=document.getElementById('seo-schema');
  if(!schema){schema=document.createElement('script');schema.type='application/ld+json';schema.id='seo-schema';document.head.appendChild(schema)}
  const graph=[
    {'@type':'MedicalClinic','@id':liveOrigin+'/#clinic',name:'Autism & ADHD Assessments Farnham',url:liveOrigin+'/',telephone:'+44 7387 697876',email:'lisa@autismassessmentsfarnham.co.uk',address:{'@type':'PostalAddress',streetAddress:'The Annexe, 3 Leigh Lane',postalCode:'GU9 8HP',addressLocality:'Farnham',addressRegion:'Surrey',addressCountry:'GB'},areaServed:['Farnham','Guildford','Godalming','Aldershot','Farnborough','Fleet','Haslemere','Woking','Surrey','Hampshire'],hasMap:'https://www.google.com/maps/search/?api=1&query=The+Annexe+3+Leigh+Lane+Farnham+GU9+8HP',logo:'https://static.wixstatic.com/media/1e4c48_6e4874f00b294c42add7876f8644f89b~mv2.png'},
    {'@type':'WebSite','@id':liveOrigin+'/#website',url:liveOrigin+'/',name:'Autism & ADHD Assessments Farnham'},
    {'@type':'WebPage','@id':liveOrigin+data.canonical+'#webpage',url:liveOrigin+data.canonical,name:data.title,description:data.description,isPartOf:{'@id':liveOrigin+'/#website'},about:{'@id':liveOrigin+'/#clinic'}},
    {'@type':'BreadcrumbList','@id':liveOrigin+data.canonical+'#breadcrumb',itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:liveOrigin+'/'},
      ...(data.canonical==='/'?[]:[{'@type':'ListItem',position:2,name:data.title.split('|')[0].trim(),item:liveOrigin+data.canonical}])
    ]}
  ];
  const serviceRoutes={
    '/adult-autism-assessment':'Adult Autism Assessment',
    '/adult-adhd-assessment':'Adult ADHD Assessment',
    '/combined-adult-autism-adhd-assessment':'Combined Adult Autism and ADHD Assessment',
    '/child-autism-assessment':'Child Autism Assessment',
    '/child-adhd-assessment':'Child ADHD Assessment',
    '/combined-child-autism-adhd-assessment':'Combined Child Autism and ADHD Assessment'
  };
  if(serviceRoutes[data.canonical]){
    graph.push({'@type':'Service',name:serviceRoutes[data.canonical],url:liveOrigin+data.canonical,provider:{'@id':liveOrigin+'/#clinic'},areaServed:['Farnham','Guildford','Godalming','Aldershot','Farnborough','Fleet','Haslemere','Woking','Surrey','Hampshire'],description:data.description});
  }
  if(data.canonical==='/faq'){
    graph.push({'@type':'FAQPage',mainEntity:[
      {'@type':'Question',name:'Do you assess both children and adults?',acceptedAnswer:{'@type':'Answer',text:'Yes. Autism assessments are available from age 2+. ADHD and combined Autism and ADHD assessments are available from age 5+.'}},
      {'@type':'Question',name:'Do you recognise PDA and female presentations?',acceptedAnswer:{'@type':'Answer',text:'Yes. The clinic recognises demand-avoidant presentations and the way Autism and ADHD may present in girls and women.'}},
      {'@type':'Question',name:'Do you prescribe ADHD medication?',acceptedAnswer:{'@type':'Answer',text:'The clinic offers ADHD assessment and can signpost to trusted independent private prescribers for medication. Prescribing is not offered at this clinic.'}},
      {'@type':'Question',name:'What is the current waiting time?',acceptedAnswer:{'@type':'Answer',text:'Typically 1–3 weeks from initial enquiry to the in-person clinic assessment, subject to clinician and pathway availability.'}}
    ]});
  }
  schema.textContent=JSON.stringify({'@context':'https://schema.org','@graph':graph});
}
/* FAQ topic groups: give each existing heading and its related questions a
 * distinct approved cream/sage surface. No transition strips or animation.
 * Existing <details> elements and open/closed state remain native. */
function groupFaqTopics(){
  const faq=document.querySelector('#app > section.faq');
  if(!faq || faq.dataset.topicGrouped==='yes')return;
  const topicShades=['light','cream','deep','cream','light','deep'];
  let group=null,index=-1;
  [...faq.children].forEach(node=>{
    if(node.tagName==='H2'){
      index++;
      group=document.createElement('div');
      group.className='faq-topic-group faq-tone-'+topicShades[index%topicShades.length];
      const id='faq-topic-'+(index+1);
      node.id=id;
      group.setAttribute('role','group');
      group.setAttribute('aria-labelledby',id);
      faq.insertBefore(group,node);
      group.appendChild(node);
    }else if(group && node.tagName==='DETAILS'){
      group.appendChild(node);
    }
  });
  faq.dataset.topicGrouped='yes';
}

/* Shared real hover/focus behaviour for every gold CTA.
 * Legacy !important colour rules on some old routes can override :hover CSS,
 * so apply one accessible, explicitly defined interaction across the preview. */
function wireBrandButtons(){
  document.querySelectorAll('a.btn,button.btn').forEach(button=>{
    if(button.dataset.brandHoverBound==='yes') return;
    button.dataset.brandHoverBound='yes';
    const paint=(hover)=>{
      const bg=hover?'#A98214':'#C29A1A';
      button.style.setProperty('background',bg,'important');
      button.style.setProperty('background-color',bg,'important');
      button.style.setProperty('border-color',bg,'important');
      button.style.setProperty('color','#FFF9E8','important');
      button.style.setProperty('font-family',"'DM Sans',Arial,sans-serif",'important');
      button.style.setProperty('font-size','13px','important');
      button.style.setProperty('font-weight','700','important');
      button.style.setProperty('font-style','normal','important');
      button.style.setProperty('letter-spacing','.065em','important');
      button.style.setProperty('line-height','1.35','important');
      button.style.setProperty('text-transform','uppercase','important');
      button.style.setProperty('box-shadow',hover?'0 7px 18px rgba(35,66,45,.17)':'0 3px 10px rgba(35,66,45,.10)','important');
      button.style.setProperty('transform',hover?'translateY(-2px)':'translateY(0)','important');
    };
    paint(false);
    button.addEventListener('pointerenter',()=>paint(true));
    button.addEventListener('pointerleave',()=>paint(false));
    button.addEventListener('focus',()=>paint(true));
    button.addEventListener('blur',()=>paint(false));
  });
}

/* Clinical service terms approved in the 23 November client review.
 * Shared content avoids omissions across adult/child diagnostic pathways. */
const reviewAssessmentRoutes=new Set([
 '/adult-assessments','/child-young-person-assessments',
 '/adult-autism-assessment','/adult-adhd-assessment',
 '/child-autism-assessment','/child-adhd-assessment',
 '/combined-adult-autism-adhd-assessment','/combined-child-autism-adhd-assessment'
]);
const medicationRoutes=new Set([
 '/adult-adhd-assessment','/child-adhd-assessment',
 '/combined-adult-autism-adhd-assessment','/combined-child-autism-adhd-assessment'
]);
const pdaInclusiveRoutes=new Set([
 '/adult-autism-assessment','/child-autism-assessment',
 '/combined-adult-autism-adhd-assessment','/combined-child-autism-adhd-assessment'
]);
const earlyYearsRoutes=new Set(['/child-young-person-assessments','/child-autism-assessment']);
function appendClinicallyReviewedDetails(path){
  const app=document.getElementById('app');
  if(!app) return;
  // Place each clinical clarification beside the relevant page content,
  // not in a catch-all information box on the homepage.
  if(earlyYearsRoutes.has(path)){
    const firstContent=app.querySelector('.page-hero')?.nextElementSibling;
    const underFiveSection=`<section class="section early-years-feature">
      <div class="early-years-feature-card">
        <div class="eyebrow">Specialist autism assessments · ages 2–4</div>
        <h2>Joint face-to-face assessment for under-fives</h2>
        <div class="early-years-feature-body">
          <p>For children aged 2–4, our autism pathway includes a joint face-to-face appointment with a paediatrician and a speech and language therapist, with wider multidisciplinary input where appropriate.</p>
          <p>We consider communication, development, strengths and support needs, and provide practical recommendations for families and early-years settings.</p>
        </div>
        <div class="cta-row early-years-feature-actions">
          <a class="btn" href="/child-pre-booking" data-link>Child Pre-Booking Form</a>
          ${path==='/child-young-person-assessments'?'<a class="btn btn-outline" href="/child-autism-assessment" data-link>Explore Child Autism Assessment</a>':''}
        </div>
      </div>
    </section>`;
    (firstContent||app).insertAdjacentHTML(firstContent?'afterend':'beforeend',underFiveSection);
  }

}

function render(path){
  path = path.replace(/\/+$/, '') || '/';
  // Inner-page woodland variants only. The homepage hero is deliberately untouched.
  const adultWoodland=new Set(['/adult-assessments','/adult-autism-assessment','/adult-adhd-assessment','/combined-adult-autism-adhd-assessment','/adult-pre-booking','/fees']);
  const childWoodland=new Set(['/child-young-person-assessments','/child-autism-assessment','/child-adhd-assessment','/combined-child-autism-adhd-assessment','/child-pre-booking','/how-assessments-work']);
  // Show the clinic's original logo on direct-entry assessment/fees/contact routes,
  // the shorter Autism & ADHD Farnham mark elsewhere, and the Speech Therapy
  // Farnham logo on that separate service's page.
  const legacyBrandRoutes=new Set([
    '/', '/adult-assessments', '/child-young-person-assessments',
    '/adult-autism-assessment', '/adult-adhd-assessment',
    '/combined-adult-autism-adhd-assessment', '/child-autism-assessment',
    '/child-adhd-assessment', '/combined-child-autism-adhd-assessment',
    '/fees', '/contact', '/adult-pre-booking', '/child-pre-booking'
  ]);
  document.body.dataset.brand=path==='/ehcp-expert-witness-reports'?'speech':legacyBrandRoutes.has(path)?'legacy':'compact';
  document.body.dataset.page=path==='/'?'home':'inner';
  document.body.dataset.reviewPath=path;
  document.body.dataset.woodland=adultWoodland.has(path)?'sunlight':childWoodland.has(path)?'birch':'canopy';
  document.getElementById('app').innerHTML=routes[path]||header('Page not found','Please return to the homepage.');
  appendClinicallyReviewedDetails(path);
  if(path==='/faq')groupFaqTopics();
  // Enforce a genuine sequence of contrasting site sections. Older per-page
  // selectors made neighbouring sections the same light green even though
  // they had different classes. Give the actual rendered sections band classes.
  const contentBands=[...document.querySelectorAll('#app > section.section:not(.dark):not(.global-start-cta)')];
  if(path!=='/'){
    contentBands.forEach((band,index)=>{
      const isSage=index%2===0;
      // The final sage section uses the deeper approved shade rather than
      // adding a separate cream divider before the light-sage reviews.
      // FAQs has a single content section, so it also becomes deeper sage.
      const isDeepSage=isSage&&((index>0&&index%4===2)||index===contentBands.length-1);
      band.classList.toggle('site-band-sage',isSage);
      band.classList.toggle('site-band-cream',!isSage);
      band.classList.toggle('site-band-deep-sage',isDeepSage);
      // There are multiple legacy, route-specific !important selectors.
      // A direct important declaration is authoritative and prevents
      // incompatible adjacent bands from retaining the same shade.
      const colour=isDeepSage?'#C7DDBE':isSage?'#E2ECDA':'#FDF9F3';
      band.style.setProperty('background',colour,'important');
    });
  }
  // Google Reviews stays the approved light sage, immediately adjoining
  // the last page section. No artificial borders, bands or transition strips.
  delete document.body.dataset.reviewCreamTransition;
  const reviewsBand=document.querySelector('.google-reviews-section');
  if(reviewsBand){
    reviewsBand.style.setProperty('background','#E2ECDA','important');
    reviewsBand.style.setProperty('border-top','0','important');
  }
  updateSeo(path);
  bind();
  bindSpeechTherapyEnquiry();
  wireBrandButtons();
  if(location.hash){
    requestAnimationFrame(()=>{
      const target=document.querySelector(location.hash);
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    });
  }else{
    window.scrollTo(0,0);
  }
}
/* A privacy-conscious enquiry form that prepares an email in the
 * visitor's own email application. It never sends/stores health information. */
function bindSpeechTherapyEnquiry(){
  const form=document.getElementById('speech-therapy-enquiry-form');
  if(!form||form.dataset.bound==='yes')return;
  form.dataset.bound='yes';
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const input=new FormData(form);
    const name=String(input.get('name')||'').trim();
    const email=String(input.get('email')||'').trim();
    const service=String(input.get('service')||'').trim();
    const message=String(input.get('message')||'').trim();
    if(!name||!email||!service||!message)return;
    const subject='Speech Therapy Farnham enquiry — '+service;
    const body='Name: '+name+'\nContact email: '+email+'\nEnquiry: '+service+'\n\n'+message+
      '\n\nSent from my own email account following the Speech Therapy Farnham website enquiry form.';
    window.location.href='mailto:speechtherapyfarnham@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  });
}

/* Render review hosts have no SPA rewrite configured. Keep preview navigation
   shareable through the physical root page until the host-level rewrite is set. */
function getReviewRoute(){
  const previewPath=new URLSearchParams(location.search).get('review');
  if(previewPath && Object.prototype.hasOwnProperty.call(routes,previewPath)) return previewPath;
  return location.pathname;
}
function reviewUrl(path,hash=''){
  return path==='/'?'/'+hash:'/?review='+encodeURIComponent(path)+hash;
}
function bind(){
  document.querySelectorAll('[data-link]').forEach(a=>{
    const u=new URL(a.href,location.origin);
    if(u.origin!==location.origin) return;
    const path=u.searchParams.get('review')||u.pathname;
    if(!Object.prototype.hasOwnProperty.call(routes,path)) return;
    // Modify the real anchor, not just JS click handling. This also fixes
    // cmd-click, open-in-new-tab, copying a link, and keyboard navigation.
    a.setAttribute('href',reviewUrl(path,u.hash));
    a.onclick=e=>{
      if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey) return;
      e.preventDefault();
      document.querySelector('.nav')?.classList.remove('open');
      document.querySelector('.menu-toggle')?.setAttribute('aria-expanded','false');
      history.pushState({},'',a.getAttribute('href'));
      render(path);
    };
  });
}
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuToggle&&nav){
  menuToggle.setAttribute('aria-expanded','false');
  menuToggle.onclick=(e)=>{
    e.stopPropagation();
    const isOpen=nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(isOpen));
    menuToggle.setAttribute('aria-label',isOpen?'Close menu':'Open menu');
  };
  nav.addEventListener('click',e=>e.stopPropagation());
  document.addEventListener('click',()=>{
    if(nav.classList.contains('open')){
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded','false');
      menuToggle.setAttribute('aria-label','Open menu');
    }
  });
}
window.onpopstate=()=>render(getReviewRoute());
render(getReviewRoute());


/* clinician-carousel-arrow delegated controls */
document.addEventListener('click',e=>{
  const btn=e.target.closest('.clinician-carousel-arrow');
  if(!btn) return;
  e.preventDefault();
  e.stopPropagation();
  const carousel=document.querySelector('.clinician-carousel');
  if(!carousel) return;
  const direction=btn.classList.contains('clinician-carousel-prev')?-1:1;
  const firstCard=carousel.querySelector('.clinician-card');
  const gap=parseFloat(getComputedStyle(carousel).gap)||14;
  const cardWidth=firstCard?firstCard.getBoundingClientRect().width:260;
  const visible=Math.max(1,Math.floor(carousel.clientWidth/(cardWidth+gap)));
  const distance=(cardWidth+gap)*Math.max(1,visible-1);
  carousel.scrollBy({left:direction*distance,behavior:'smooth'});
});
