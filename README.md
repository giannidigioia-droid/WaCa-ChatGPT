# WaCa ChatGPT

Reverse-engineered source aligned to the live `wac-chatgpt` experience.

## Structure
- `index.html`: self-contained responsive site, Cloudinary galleries and booking UI
- `api/calendar.js`: live iCal availability endpoint, no cache
- `api/contact.js`: Resend email endpoint to sunsetmonopoli@gmail.com
- `vercel.json`: Vercel static/API configuration

## Calendar environment variables
The API accepts the first available variable for each apartment:

Dream: WACA_DREAM_ICAL, DREAM_ICAL_URL, ICAL_DREAM_URL, GOOGLE_ICAL_DREAM, DREAM_ICAL  
Heaven: WACA_HEAVEN_ICAL, HEAVEN_ICAL_URL, ICAL_HEAVEN_URL, GOOGLE_ICAL_HEAVEN, HEAVEN_ICAL  
Oasis: WACA_OASIS_ICAL, OASIS_ICAL_URL, ICAL_OASIS_URL, GOOGLE_ICAL_OASIS, OASIS_ICAL

Villa intera is derived by merging the three calendars.

## Email
Required: `RESEND_API_KEY`  
Optional: `RESEND_FROM_EMAIL`
