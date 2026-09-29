export default async function handler(req,res){
  res.setHeader("Cache-Control","no-store");
  if(req.method!=="POST")return res.status(405).json({error:"Method not allowed"});

  let body=req.body;
  if(typeof body==="string"){
    try{body=JSON.parse(body)}catch{return res.status(400).json({error:"Invalid JSON"})}
  }

  const apartment=String(body?.apartment||"").trim();
  const name=String(body?.name||"").trim();
  const contact=String(body?.contact||"").trim();
  const checkin=String(body?.checkin||"").trim();
  const checkout=String(body?.checkout||"").trim();
  const adults=Number(body?.adults||0);
  const children=Number(body?.children||0);

  if(!apartment||!name||!contact||!checkin||!checkout){
    return res.status(400).json({error:"Missing required fields"});
  }

  const nights=Math.round((new Date(checkout+"T12:00:00")-new Date(checkin+"T12:00:00"))/86400000);
  if(!Number.isFinite(nights)||nights<=0){
    return res.status(400).json({error:"Invalid stay dates"});
  }

  const payload={
    stay: apartment.charAt(0).toUpperCase()+apartment.slice(1).toLowerCase(),
    checkin,
    checkout,
    nights,
    adults,
    children,
    name,
    contactInfo: contact,
    website:""
  };

  try{
    const r=await fetch("https://wac-chatgpt.vercel.app/api/contact",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(payload)
    });
    const data=await r.json().catch(()=>({}));
    if(!r.ok){
      return res.status(r.status).json({error:"Mail backend error",detail:data});
    }
    return res.status(200).json({ok:true,id:data.id||null});
  }catch(err){
    return res.status(502).json({error:"Mail backend unavailable"});
  }
}
