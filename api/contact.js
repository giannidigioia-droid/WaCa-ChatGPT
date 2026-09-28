export default async function handler(req,res){
  res.setHeader("Cache-Control","no-store");
  if(req.method!=="POST")return res.status(405).json({error:"Method not allowed"});
  let body=req.body;
  if(typeof body==="string"){try{body=JSON.parse(body)}catch{return res.status(400).json({error:"Invalid JSON"})}}
  const apartment=String(body?.apartment||"").trim();
  const name=String(body?.name||"").trim();
  const contact=String(body?.contact||"").trim();
  const checkin=String(body?.checkin||"").trim();
  const checkout=String(body?.checkout||"").trim();
  const adults=String(body?.adults||"").trim();
  const children=String(body?.children||"0").trim();
  if(!apartment||!name||!contact||!checkin||!checkout)return res.status(400).json({error:"Missing required fields"});
  const key=process.env.RESEND_API_KEY;
  if(!key)return res.status(500).json({error:"RESEND_API_KEY missing"});
  const subject="WaCa · richiesta disponibilità · "+apartment;
  const text=[
    "Nuova richiesta dal sito WaCa",
    "",
    "Soluzione: "+apartment,
    "Nome: "+name,
    "Contatto: "+contact,
    "Check-in: "+checkin,
    "Check-out: "+checkout,
    "Adulti: "+adults,
    "Ragazzi: "+children
  ].join("\n");
  const from=process.env.RESEND_FROM_EMAIL||"WaCa Website <onboarding@resend.dev>";
  const r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":"Bearer "+key,"Content-Type":"application/json"},body:JSON.stringify({from,to:["sunsetmonopoli@gmail.com"],subject,text})});
  const data=await r.json().catch(()=>({}));
  if(!r.ok)return res.status(r.status).json({error:"Resend error",detail:data});
  return res.status(200).json({ok:true,id:data.id||null});
}