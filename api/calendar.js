const ENV_NAMES={
  dream:["WACA_DREAM_ICAL","DREAM_ICAL_URL","ICAL_DREAM_URL","GOOGLE_ICAL_DREAM","DREAM_ICAL"],
  heaven:["WACA_HEAVEN_ICAL","HEAVEN_ICAL_URL","ICAL_HEAVEN_URL","GOOGLE_ICAL_HEAVEN","HEAVEN_ICAL"],
  oasis:["WACA_OASIS_ICAL","OASIS_ICAL_URL","ICAL_OASIS_URL","GOOGLE_ICAL_OASIS","OASIS_ICAL"]
};
function envUrl(unit){for(const n of ENV_NAMES[unit]||[]){if(process.env[n])return process.env[n]}return null}
function unfold(s){return s.replace(/\r?\n[ \t]/g,"")}
function dateOnly(v){if(!v)return null;const m=v.match(/(\d{4})(\d{2})(\d{2})/);return m?m[1]+"-"+m[2]+"-"+m[3]:null}
function parseIcs(text){
  text=unfold(text);const periods=[];const re=/BEGIN:VEVENT([\s\S]*?)END:VEVENT/g;let m;
  while((m=re.exec(text))){
    const b=m[1];if(/STATUS:CANCELLED/i.test(b))continue;
    const s=(b.match(/DTSTART(?:;[^:]*)?:(.+)/i)||[])[1];
    const e=(b.match(/DTEND(?:;[^:]*)?:(.+)/i)||[])[1];
    const start=dateOnly(s),end=dateOnly(e)||start;
    if(start&&end)periods.push({start,end});
  }
  periods.sort((a,b)=>a.start.localeCompare(b.start));return periods;
}
async function one(unit){
  const url=envUrl(unit);if(!url)throw new Error("Missing iCal env for "+unit);
  const r=await fetch(url,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});
  if(!r.ok)throw new Error("iCal fetch failed "+r.status);
  return parseIcs(await r.text());
}
function merge(periods){
  if(!periods.length)return[];
  periods=periods.slice().sort((a,b)=>a.start.localeCompare(b.start));const out=[{...periods[0]}];
  for(const p of periods.slice(1)){const last=out[out.length-1];if(p.start<=last.end){if(p.end>last.end)last.end=p.end}else out.push({...p})}return out;
}
export default async function handler(req,res){
  res.setHeader("Cache-Control","no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0");
  if(req.method!=="GET")return res.status(405).json({error:"Method not allowed"});
  const unit=String(req.query.unit||"").toLowerCase();
  if(!["dream","heaven","oasis","villa"].includes(unit))return res.status(400).json({error:"Invalid unit"});
  try{
    let periods,label;
    if(unit==="villa"){const all=await Promise.all(["dream","heaven","oasis"].map(one));periods=merge(all.flat());label="Villa intera"}
    else{periods=await one(unit);label=unit.charAt(0).toUpperCase()+unit.slice(1)}
    return res.status(200).json({unit,label,periods,generatedAt:new Date().toISOString()});
  }catch(e){return res.status(500).json({error:e.message})}
}