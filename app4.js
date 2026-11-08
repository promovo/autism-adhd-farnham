const routes={'/':home,'/services':assessmentOverview,'/copy-of-faq':resources,'/recommended-services':resources,'/choose-your-assessment':assessmentOverview,'/adult-assessments':adult,'/child-young-person-assessments':child,'/adult-autism-assessment':adultAutism,'/adult-adhd-assessment':adultAdhd,'/combined-adult-autism-adhd-assessment':combinedAdult,'/child-autism-assessment':childAutism,'/child-adhd-assessment':childAdhd,'/combined-child-autism-adhd-assessment':combinedChild,'/autism-adhd-women':women,'/pda-demand-avoidant-presentation':pda,'/adult-pre-booking':`${header('Adult Autism & ADHD Pre-Booking Form','Initial information and triage for adults considering Autism, ADHD or a Combined assessment.')}<section class="section prebooking-main"><div class="soft-panel prebooking-panel"><h2>Complete the Adult Pre-Booking Form</h2><p>Lisa reviews this form manually. It is for initial triage only and is not diagnostic.</p><a class="btn" href="${adultForm}" target="_blank">Open Adult Pre-Booking Form</a></div></section><section class="section alt prebooking-next"><div class="section-lead"><h2>What happens next?</h2><p>Lisa reviews the information and advises on the most appropriate next step. If appropriate, you can then arrange the free 15-minute telephone consultation.</p></div></section>`,
'/child-pre-booking':`${header('Child & Young Person Autism / ADHD Pre-Booking Form','Initial information and triage for a child or young person where Autism, ADHD or a Combined assessment is being considered.')}<section class="section prebooking-main"><div class="soft-panel prebooking-panel"><h2>Complete the Child / Young Person Form</h2><p>Lisa reviews this form manually. It is for initial triage only and is not diagnostic.</p><a class="btn" href="${childForm}" target="_blank">Open Child / Young Person Form</a></div></section><section class="section alt prebooking-next"><div class="section-lead"><h2>What happens next?</h2><p>Lisa reviews the information and advises on the most appropriate next step. If appropriate, you can then arrange the free 15-minute telephone consultation.</p></div></section>`,
'/how-assessments-work':how,'/fees':fees,'/our-team':team,'/faq':faq,'/free-consultation':consultation,'/post-assessment-advice':post,'/local-resources':resources,'/privacy-policy':privacy,'/ehcp-expert-witness-reports':ehcp,'/contact':contact};
const seoMeta={
'/':{title:'Autism & ADHD Assessments Farnham, Surrey | Adults & Children',description:'Private Autism, ADHD and combined assessments for adults, children and young people in Farnham, Surrey. Multidisciplinary clinicians, PDA-aware and female-presentation informed.',canonical:'/'},
'/choose-your-assessment':{title:'Choose an Autism or ADHD Assessment | Farnham, Surrey',description:'Choose the right Autism, ADHD or combined assessment pathway for an adult, child or young person in Farnham, Surrey.',canonical:'/choose-your-assessment'},
'/adult-assessments':{title:'Adult Autism & ADHD Assessments | Farnham, Surrey',description:'Adult Autism, ADHD and combined Autism + ADHD assessments in Farnham, Surrey, delivered by an experienced multidisciplinary clinical team.',canonical:'/adult-assessments'},
'/child-young-person-assessments':{title:'Child Autism & ADHD Assessments | Farnham, Surrey',description:'Autism, ADHD and combined assessments for children and young people in Farnham, Surrey, with a calm, flexible and multidisciplinary approach.',canonical:'/child-young-person-assessments'},
'/adult-autism-assessment':{title:'Adult Autism Assessment | Farnham, Surrey',description:'Private adult Autism assessments in Farnham, Surrey, with specialist clinicians, multidisciplinary review, clear reports and practical recommendations.',canonical:'/adult-autism-assessment'},
'/adult-adhd-assessment':{title:'Adult ADHD Assessment | Farnham, Surrey',description:'Private adult ADHD assessments in Farnham, Surrey with specialist clinical review, clear reporting and practical next steps.',canonical:'/adult-adhd-assessment'},
'/combined-adult-autism-adhd-assessment':{title:'Combined Adult Autism & ADHD Assessment | Farnham',description:'Combined Autism and ADHD assessment for adults in Farnham, Surrey where both conditions may be relevant.',canonical:'/combined-adult-autism-adhd-assessment'},
'/child-autism-assessment':{title:'Child Autism Assessment | Farnham, Surrey',description:'Private Autism assessments for children and young people in Farnham, Surrey from age 2+, with specialist multidisciplinary clinicians.',canonical:'/child-autism-assessment'},
'/child-adhd-assessment':{title:'Child ADHD Assessment | Farnham, Surrey',description:'Private ADHD assessments for children and young people in Farnham, Surrey from age 5+, with specialist clinical review.',canonical:'/child-adhd-assessment'},
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
'/contact':{title:'Contact Autism & ADHD Assessments Farnham | Surrey',description:'Contact Autism & ADHD Assessments Farnham in South Farnham, Surrey about Autism, ADHD and combined assessment pathways.',canonical:'/contact'},
'/ehcp-expert-witness-reports':{title:'EHCP & Expert Witness Reports | Farnham, Surrey',description:'Information about EHCP and expert witness report support linked to Autism & ADHD Assessments Farnham in Surrey.',canonical:'/ehcp-expert-witness-reports'},
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
    {'@type':'MedicalClinic','@id':liveOrigin+'/#clinic',name:'Autism & ADHD Assessments Farnham',url:liveOrigin+'/',telephone:'+44 7387 697876',email:'lisa@autismassessmentsfarnham.co.uk',address:{'@type':'PostalAddress',addressLocality:'Farnham',addressRegion:'Surrey',addressCountry:'GB'},areaServed:['Farnham','Surrey','South East England']},
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
    graph.push({'@type':'Service',name:serviceRoutes[data.canonical],url:liveOrigin+data.canonical,provider:{'@id':liveOrigin+'/#clinic'},areaServed:['Farnham','Surrey','South East England'],description:data.description});
  }
  if(data.canonical==='/faq'){
    graph.push({'@type':'FAQPage',mainEntity:[
      {'@type':'Question',name:'Do you assess both children and adults?',acceptedAnswer:{'@type':'Answer',text:'Yes. Autism assessments are available from age 2+. ADHD and combined Autism and ADHD assessments are available from age 5+.'}},
      {'@type':'Question',name:'Do you recognise PDA and female presentations?',acceptedAnswer:{'@type':'Answer',text:'Yes. The clinic recognises demand-avoidant presentations and the way Autism and ADHD may present in girls and women.'}},
      {'@type':'Question',name:'Do you prescribe ADHD medication?',acceptedAnswer:{'@type':'Answer',text:'No. The clinic assesses and diagnoses ADHD but does not prescribe medication.'}},
      {'@type':'Question',name:'What is the current waiting time?',acceptedAnswer:{'@type':'Answer',text:'Typical availability is around 1–3 weeks, subject to clinician and pathway availability.'}}
    ]});
  }
  schema.textContent=JSON.stringify({'@context':'https://schema.org','@graph':graph});
}
function render(path){
  document.getElementById('app').innerHTML=routes[path]||header('Page not found','Please return to the homepage.');
  updateSeo(path);
  window.scrollTo(0,0);
  bind();
}
function bind(){
  document.querySelectorAll('[data-link]').forEach(a=>a.onclick=e=>{
    const u=new URL(a.href);
    if(u.origin===location.origin){
      e.preventDefault();
      history.pushState({},'',u.pathname);
      render(u.pathname);
    }
  })
}
document.querySelector('.menu-toggle').onclick=()=>document.querySelector('.nav').classList.toggle('open');
window.onpopstate=()=>render(location.pathname);
render(location.pathname);
