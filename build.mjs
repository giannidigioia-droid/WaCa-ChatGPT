import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";

const siteUrl = "https://villawaca.it";
const source = await readFile("index.html", "utf8");
const sourceWhatsappLine = 'var msg="Ciao, vorrei verificare la disponibilità di "+unit+" dal "+payload.checkin+" al "+payload.checkout+". Ospiti: "+payload.adults+" adulti, "+payload.children+" ragazzi. Nome: "+payload.name+". Contatto: "+payload.contact;';
const sourceAvailabilityUpdatedLine = 'box.textContent="Aggiornato automaticamente "+new Date().toLocaleDateString("it-IT")+" alle "+new Date().toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"});';

const locales = {
  it: {
    path: "/",
    htmlLang: "it",
    localeCode: "it-IT",
    title: "WaCa Apulian Villa | Monopoli, Puglia",
    description: "WaCa Apulian Villa a Monopoli: villa con piscina al sale tra gli ulivi, composta da Dream, Heaven e Oasis.",
    replacements: {}
  },
  en: {
    path: "/en",
    htmlLang: "en",
    localeCode: "en-GB",
    title: "WaCa Apulian Villa | Monopoli, Puglia",
    description: "WaCa Apulian Villa in Monopoli: a saltwater pool villa among olive trees with Dream, Heaven and Oasis apartments.",
    whatsappLine: 'var msg="Hello, I would like to check availability for "+unit+" from "+payload.checkin+" to "+payload.checkout+". Guests: "+payload.adults+" adults, "+payload.children+" children. Name: "+payload.name+". Contact: "+payload.contact;',
    availabilityUpdatedLine: 'box.textContent="Automatically updated "+new Date().toLocaleDateString("en-GB")+" at "+new Date().toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"});',
    replacements: {
      "La villa": "The villa",
      "Alloggi": "Stays",
      "Posizione": "Location",
      "Verifica disponibilità": "Check availability",
      "Esplora la villa": "Explore the villa",
      "Il lusso<br>di rallentare.": "The luxury<br>of slowing down.",
      "Una villa privata tra ulivi secolari, a pochi minuti dal mare. Tre spazi indipendenti, un’unica esperienza autentica.": "A private villa among ancient olive trees, just minutes from the sea. Three independent spaces, one authentic experience.",
      "<div class=\"stats\"><div class=\"stat\"><b>15</b><span>ospiti</span></div><div class=\"stat\"><b>6</b><span>camere</span></div><div class=\"stat\"><b>12×4 m</b><span>piscina</span></div><div class=\"stat\"><b>10 min</b><span>Monopoli</span></div></div>": "<div class=\"stats\"><div class=\"stat\"><b>15</b><span>guests</span></div><div class=\"stat\"><b>6</b><span>bedrooms</span></div><div class=\"stat\"><b>12×4 m</b><span>pool</span></div><div class=\"stat\"><b>10 min</b><span>Monopoli</span></div></div>",
      "Un rifugio contemporaneo nell’anima della Puglia.": "A contemporary retreat in the soul of Puglia.",
      "Spazi luminosi, silenzio e natura. WaCa può essere riservata interamente oppure vissuta attraverso Dream, Heaven e Oasis. Ogni soggiorno nasce per offrire privacy, comfort e il ritmo lento della campagna pugliese.": "Light-filled spaces, silence and nature. WaCa can be reserved as a whole villa or experienced through Dream, Heaven and Oasis. Every stay is designed for privacy, comfort and the slow rhythm of the Puglian countryside.",
      "Scopri gli alloggi ↗": "Discover the stays ↗",
      "01 · INTERA VILLA": "01 · WHOLE VILLA",
      "Privacy assoluta.": "Absolute privacy.",
      "La proprietà completa per famiglie e gruppi: tre appartamenti indipendenti, piscina al sale, uliveto e ampi spazi esterni.": "The full property for families and groups: three independent apartments, a saltwater pool, olive grove and generous outdoor spaces.",
      "I NOSTRI SPAZI": "OUR SPACES",
      "Scegli il tuo modo<br>di vivere WaCa.": "Choose your way<br>to experience WaCa.",
      "Vedi tutte le foto": "See all photos",
      "Foto precedente": "Previous photo",
      "Foto successiva": "Next photo",
      "Tre camere, cucina completa e due patii privati, uno affacciato sulla piscina.": "Three bedrooms, a full kitchen and two private patios, one overlooking the pool.",
      "Richiedi Dream ↗": "Request Dream ↗",
      "Luminoso e spazioso, con accesso diretto al patio, alla piscina e al giardino.": "Bright and spacious, with direct access to the patio, pool and garden.",
      "Richiedi Heaven ↗": "Request Heaven ↗",
      "Il rifugio più intimo: una camera, living con divano letto e un angolo riservato di giardino.": "The most intimate retreat: one bedroom, living area with sofa bed and a private garden corner.",
      "Richiedi Oasis ↗": "Request Oasis ↗",
      "Dentro WaCa.": "Inside WaCa.",
      "Clicca su una categoria per vedere tutte le immagini.": "Choose a category to view all images.",
      "TUTTO CIÒ CHE SERVE": "EVERYTHING YOU NEED",
      "Piscina ad acqua salata": "Saltwater pool",
      "Giardino di ulivi": "Olive garden",
      "Tre cucine attrezzate": "Three equipped kitchens",
      "Wi-Fi gratuito": "Free Wi-Fi",
      "Parcheggio privato": "Private parking",
      "Aria condizionata": "Air conditioning",
      "Tra la Valle d’Itria e il mare Adriatico, in una posizione ideale per scoprire borghi, spiagge e sapori autentici.": "Between the Itria Valley and the Adriatic Sea, perfectly placed for villages, beaches and authentic flavours.",
      "Monopoli centro": "Monopoli centre",
      "APRI LA MAPPA ↗": "OPEN MAP ↗",
      "PAROLE DEGLI OSPITI": "GUEST WORDS",
      "Chi arriva,<br>vuole tornare.": "Those who arrive,<br>want to return.",
      "Riepilogo valutazioni Booking": "Booking score summary",
      "Pulizia": "Cleanliness",
      "Servizi": "Facilities",
      "Tutte": "All",
      "Mostra tutte le recensioni ↓": "Show all reviews ↓",
      "Mostra meno ↑": "Show less ↑",
      "PRENOTAZIONE DIRETTA": "DIRECT BOOKING",
      "Scegli la soluzione che preferisci, poi seleziona direttamente check-in e check-out dal calendario.": "Choose your preferred stay, then select check-in and check-out directly from the calendar.",
      "✓ Nessun pagamento ora": "✓ No payment now",
      "✓ Risposta diretta dall’host": "✓ Direct reply from the host",
      "SOLUZIONE PREFERITA": "PREFERRED STAY",
      "SOLUZIONE PREMIUM": "PREMIUM OPTION",
      "Villa intera": "Whole villa",
      "4+2 OSPITI": "4+2 GUESTS",
      "4+1 OSPITI": "4+1 GUESTS",
      "4 OSPITI": "4 GUESTS",
      "fino a 4 ospiti": "up to 4 guests",
      "fino a 5 ospiti": "up to 5 guests",
      "fino a 6 ospiti": "up to 6 guests",
      "fino a 15 ospiti": "up to 15 guests",
      "Soggiorno minimo 5 notti. Eccezioni su richiesta via": "Minimum stay 5 nights. Exceptions on request via",
      "Disponibilità WaCa Calendar": "WaCa Calendar availability",
      "Seleziona una soluzione per vedere il calendario.": "Select a stay to view the calendar.",
      "Mese precedente": "Previous month",
      "Mese successivo": "Next month",
      "Disponibile": "Available",
      "Non disponibile": "Unavailable",
      "Selezionato": "Selected",
      "Adulti": "Adults",
      "Ragazzi": "Children",
      "Nome completo": "Full name",
      "Email o telefono": "Email or phone",
      "Chiedi disponibilità ↗": "Ask availability ↗",
      "Si aprirà WhatsApp con la richiesta già compilata.": "WhatsApp will open with the request already filled in.",
      "Torna su ↑": "Back to top ↑",
      "VERIFICA DISPONIBILITÀ": "CHECK AVAILABILITY",
      "Aggiornamento disponibilità in corso…": "Updating availability…",
      "Calendario temporaneamente non disponibile.": "Calendar temporarily unavailable.",
      "Il soggiorno minimo è di 5 notti.": "The minimum stay is 5 nights.",
      "Date selezionate. Completa i dati e invia la richiesta.": "Dates selected. Complete your details and send the request.",
      "Seleziona prima una soluzione.": "Select a stay first.",
      "Invio richiesta…": "Sending request…",
      "Richiesta preparata. Apertura WhatsApp…": "Request prepared. Opening WhatsApp…"
    },
    gallery: {
      Piscina: "Pool",
      Patii: "Patios",
      Esterni: "Exteriors",
      Camere: "Bedrooms",
      Interni: "Interiors",
      foto: "photos"
    }
  },
  fr: {
    path: "/fr",
    htmlLang: "fr",
    localeCode: "fr-FR",
    title: "WaCa Apulian Villa | Monopoli, Pouilles",
    description: "WaCa Apulian Villa a Monopoli : villa avec piscine au sel parmi les oliviers, composee de Dream, Heaven et Oasis.",
    whatsappLine: 'var msg="Bonjour, je souhaite verifier la disponibilite de "+unit+" du "+payload.checkin+" au "+payload.checkout+". Personnes : "+payload.adults+" adultes, "+payload.children+" enfants. Nom : "+payload.name+". Contact : "+payload.contact;',
    availabilityUpdatedLine: 'box.textContent="Mis a jour automatiquement "+new Date().toLocaleDateString("fr-FR")+" a "+new Date().toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"});',
    replacements: {
      "La villa": "La villa",
      "Alloggi": "Hebergements",
      "Posizione": "Emplacement",
      "Verifica disponibilità": "Verifier les disponibilites",
      "Esplora la villa": "Explorer la villa",
      "Il lusso<br>di rallentare.": "Le luxe<br>de ralentir.",
      "Una villa privata tra ulivi secolari, a pochi minuti dal mare. Tre spazi indipendenti, un’unica esperienza autentica.": "Une villa privee parmi les oliviers centenaires, a quelques minutes de la mer. Trois espaces independants, une experience authentique.",
      "<div class=\"stats\"><div class=\"stat\"><b>15</b><span>ospiti</span></div><div class=\"stat\"><b>6</b><span>camere</span></div><div class=\"stat\"><b>12×4 m</b><span>piscina</span></div><div class=\"stat\"><b>10 min</b><span>Monopoli</span></div></div>": "<div class=\"stats\"><div class=\"stat\"><b>15</b><span>personnes</span></div><div class=\"stat\"><b>6</b><span>chambres</span></div><div class=\"stat\"><b>12×4 m</b><span>piscine</span></div><div class=\"stat\"><b>10 min</b><span>Monopoli</span></div></div>",
      "Un rifugio contemporaneo nell’anima della Puglia.": "Un refuge contemporain au coeur des Pouilles.",
      "Spazi luminosi, silenzio e natura. WaCa può essere riservata interamente oppure vissuta attraverso Dream, Heaven e Oasis. Ogni soggiorno nasce per offrire privacy, comfort e il ritmo lento della campagna pugliese.": "Des espaces lumineux, du silence et la nature. WaCa peut etre reservee en entier ou vecue a travers Dream, Heaven et Oasis. Chaque sejour est pense pour offrir intimite, confort et le rythme lent de la campagne des Pouilles.",
      "Scopri gli alloggi ↗": "Decouvrir les hebergements ↗",
      "01 · INTERA VILLA": "01 · VILLA ENTIERE",
      "Privacy assoluta.": "Intimite absolue.",
      "La proprietà completa per famiglie e gruppi: tre appartamenti indipendenti, piscina al sale, uliveto e ampi spazi esterni.": "La propriete entiere pour familles et groupes : trois appartements independants, piscine au sel, oliveraie et grands espaces exterieurs.",
      "I NOSTRI SPAZI": "NOS ESPACES",
      "Scegli il tuo modo<br>di vivere WaCa.": "Choisissez votre facon<br>de vivre WaCa.",
      "Vedi tutte le foto": "Voir toutes les photos",
      "Foto precedente": "Photo precedente",
      "Foto successiva": "Photo suivante",
      "Tre camere, cucina completa e due patii privati, uno affacciato sulla piscina.": "Trois chambres, cuisine complete et deux patios prives, dont un avec vue sur la piscine.",
      "Richiedi Dream ↗": "Demander Dream ↗",
      "Luminoso e spazioso, con accesso diretto al patio, alla piscina e al giardino.": "Lumineux et spacieux, avec acces direct au patio, a la piscine et au jardin.",
      "Richiedi Heaven ↗": "Demander Heaven ↗",
      "Il rifugio più intimo: una camera, living con divano letto e un angolo riservato di giardino.": "Le refuge le plus intime : une chambre, salon avec canape-lit et un coin de jardin prive.",
      "Richiedi Oasis ↗": "Demander Oasis ↗",
      "Dentro WaCa.": "A l'interieur de WaCa.",
      "Clicca su una categoria per vedere tutte le immagini.": "Choisissez une categorie pour voir toutes les images.",
      "TUTTO CIÒ CHE SERVE": "TOUT CE QU'IL FAUT",
      "Piscina ad acqua salata": "Piscine au sel",
      "Giardino di ulivi": "Jardin d'oliviers",
      "Tre cucine attrezzate": "Trois cuisines equipees",
      "Wi-Fi gratuito": "Wi-Fi gratuit",
      "Parcheggio privato": "Parking prive",
      "Aria condizionata": "Climatisation",
      "Tra la Valle d’Itria e il mare Adriatico, in una posizione ideale per scoprire borghi, spiagge e sapori autentici.": "Entre la Vallee d'Itria et la mer Adriatique, un emplacement ideal pour decouvrir villages, plages et saveurs authentiques.",
      "Monopoli centro": "Centre de Monopoli",
      "APRI LA MAPPA ↗": "OUVRIR LA CARTE ↗",
      "PAROLE DEGLI OSPITI": "AVIS DES HOTES",
      "Chi arriva,<br>vuole tornare.": "Ceux qui arrivent<br>veulent revenir.",
      "Riepilogo valutazioni Booking": "Resume des notes Booking",
      "Pulizia": "Proprete",
      "Servizi": "Services",
      "Tutte": "Tous",
      "Mostra tutte le recensioni ↓": "Voir tous les avis ↓",
      "Mostra meno ↑": "Voir moins ↑",
      "PRENOTAZIONE DIRETTA": "RESERVATION DIRECTE",
      "Scegli la soluzione che preferisci, poi seleziona direttamente check-in e check-out dal calendario.": "Choisissez l'hebergement souhaite, puis selectionnez directement l'arrivee et le depart dans le calendrier.",
      "✓ Nessun pagamento ora": "✓ Aucun paiement maintenant",
      "✓ Risposta diretta dall’host": "✓ Reponse directe de l'hote",
      "SOLUZIONE PREFERITA": "OPTION PREFEREE",
      "SOLUZIONE PREMIUM": "OPTION PREMIUM",
      "Villa intera": "Villa entiere",
      "4+2 OSPITI": "4+2 PERSONNES",
      "4+1 OSPITI": "4+1 PERSONNES",
      "4 OSPITI": "4 PERSONNES",
      "fino a 4 ospiti": "jusqu'a 4 personnes",
      "fino a 5 ospiti": "jusqu'a 5 personnes",
      "fino a 6 ospiti": "jusqu'a 6 personnes",
      "fino a 15 ospiti": "jusqu'a 15 personnes",
      "Soggiorno minimo 5 notti. Eccezioni su richiesta via": "Sejour minimum de 5 nuits. Exceptions sur demande via",
      "Disponibilità WaCa Calendar": "Disponibilites WaCa Calendar",
      "Seleziona una soluzione per vedere il calendario.": "Selectionnez un hebergement pour voir le calendrier.",
      "Mese precedente": "Mois precedent",
      "Mese successivo": "Mois suivant",
      "Disponibile": "Disponible",
      "Non disponibile": "Indisponible",
      "Selezionato": "Selectionne",
      "Adulti": "Adultes",
      "Ragazzi": "Enfants",
      "Nome completo": "Nom complet",
      "Email o telefono": "E-mail ou telephone",
      "Chiedi disponibilità ↗": "Demander disponibilite ↗",
      "Si aprirà WhatsApp con la richiesta già compilata.": "WhatsApp s'ouvrira avec la demande deja remplie.",
      "Torna su ↑": "Retour en haut ↑",
      "VERIFICA DISPONIBILITÀ": "VERIFIER LES DISPONIBILITES",
      "Aggiornamento disponibilità in corso…": "Mise a jour des disponibilites…",
      "Calendario temporaneamente non disponibile.": "Calendrier temporairement indisponible.",
      "Il soggiorno minimo è di 5 notti.": "Le sejour minimum est de 5 nuits.",
      "Date selezionate. Completa i dati e invia la richiesta.": "Dates selectionnees. Completez vos coordonnees et envoyez la demande.",
      "Seleziona prima una soluzione.": "Selectionnez d'abord un hebergement.",
      "Invio richiesta…": "Envoi de la demande…",
      "Richiesta preparata. Apertura WhatsApp…": "Demande preparee. Ouverture de WhatsApp…"
    },
    gallery: {
      Piscina: "Piscine",
      Patii: "Patios",
      Esterni: "Exterieurs",
      Camere: "Chambres",
      Interni: "Interieurs",
      foto: "photos"
    }
  },
  de: {
    path: "/de",
    htmlLang: "de",
    localeCode: "de-DE",
    title: "WaCa Apulian Villa | Monopoli, Apulien",
    description: "WaCa Apulian Villa in Monopoli: Villa mit Salzwasserpool zwischen Olivenbaeumen, bestehend aus Dream, Heaven und Oasis.",
    whatsappLine: 'var msg="Hallo, ich moechte die Verfuegbarkeit pruefen fuer "+unit+" vom "+payload.checkin+" bis "+payload.checkout+". Gaeste: "+payload.adults+" Erwachsene, "+payload.children+" Kinder. Name: "+payload.name+". Kontakt: "+payload.contact;',
    availabilityUpdatedLine: 'box.textContent="Automatisch aktualisiert "+new Date().toLocaleDateString("de-DE")+" um "+new Date().toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"});',
    replacements: {
      "La villa": "Die Villa",
      "Alloggi": "Unterkuenfte",
      "Posizione": "Lage",
      "Verifica disponibilità": "Verfuegbarkeit pruefen",
      "Esplora la villa": "Villa entdecken",
      "Il lusso<br>di rallentare.": "Der Luxus,<br>langsamer zu leben.",
      "Una villa privata tra ulivi secolari, a pochi minuti dal mare. Tre spazi indipendenti, un’unica esperienza autentica.": "Eine private Villa zwischen jahrhundertealten Olivenbaeumen, nur wenige Minuten vom Meer entfernt. Drei unabhaengige Bereiche, ein authentisches Erlebnis.",
      "<div class=\"stats\"><div class=\"stat\"><b>15</b><span>ospiti</span></div><div class=\"stat\"><b>6</b><span>camere</span></div><div class=\"stat\"><b>12×4 m</b><span>piscina</span></div><div class=\"stat\"><b>10 min</b><span>Monopoli</span></div></div>": "<div class=\"stats\"><div class=\"stat\"><b>15</b><span>Gaeste</span></div><div class=\"stat\"><b>6</b><span>Schlafzimmer</span></div><div class=\"stat\"><b>12×4 m</b><span>Pool</span></div><div class=\"stat\"><b>10 min</b><span>Monopoli</span></div></div>",
      "Un rifugio contemporaneo nell’anima della Puglia.": "Ein moderner Rueckzugsort im Herzen Apuliens.",
      "Spazi luminosi, silenzio e natura. WaCa può essere riservata interamente oppure vissuta attraverso Dream, Heaven e Oasis. Ogni soggiorno nasce per offrire privacy, comfort e il ritmo lento della campagna pugliese.": "Helle Raeume, Ruhe und Natur. WaCa kann als ganze Villa reserviert oder ueber Dream, Heaven und Oasis erlebt werden. Jeder Aufenthalt ist auf Privatsphaere, Komfort und den langsamen Rhythmus der apulischen Landschaft ausgelegt.",
      "Scopri gli alloggi ↗": "Unterkuenfte entdecken ↗",
      "01 · INTERA VILLA": "01 · GANZE VILLA",
      "Privacy assoluta.": "Absolute Privatsphaere.",
      "La proprietà completa per famiglie e gruppi: tre appartamenti indipendenti, piscina al sale, uliveto e ampi spazi esterni.": "Das gesamte Anwesen fuer Familien und Gruppen: drei unabhaengige Apartments, Salzwasserpool, Olivenhain und grosszuegige Aussenbereiche.",
      "I NOSTRI SPAZI": "UNSERE BEREICHE",
      "Scegli il tuo modo<br>di vivere WaCa.": "Waehlen Sie Ihre Art,<br>WaCa zu erleben.",
      "Vedi tutte le foto": "Alle Fotos ansehen",
      "Foto precedente": "Vorheriges Foto",
      "Foto successiva": "Naechstes Foto",
      "Tre camere, cucina completa e due patii privati, uno affacciato sulla piscina.": "Drei Schlafzimmer, voll ausgestattete Kueche und zwei private Patios, einer mit Blick auf den Pool.",
      "Richiedi Dream ↗": "Dream anfragen ↗",
      "Luminoso e spazioso, con accesso diretto al patio, alla piscina e al giardino.": "Hell und grosszuegig, mit direktem Zugang zum Patio, Pool und Garten.",
      "Richiedi Heaven ↗": "Heaven anfragen ↗",
      "Il rifugio più intimo: una camera, living con divano letto e un angolo riservato di giardino.": "Der intimste Rueckzugsort: ein Schlafzimmer, Wohnbereich mit Schlafsofa und ein privater Gartenbereich.",
      "Richiedi Oasis ↗": "Oasis anfragen ↗",
      "Dentro WaCa.": "In WaCa.",
      "Clicca su una categoria per vedere tutte le immagini.": "Waehlen Sie eine Kategorie, um alle Bilder zu sehen.",
      "TUTTO CIÒ CHE SERVE": "ALLES, WAS SIE BRAUCHEN",
      "Piscina ad acqua salata": "Salzwasserpool",
      "Giardino di ulivi": "Olivengarten",
      "Tre cucine attrezzate": "Drei ausgestattete Kuechen",
      "Wi-Fi gratuito": "Kostenloses WLAN",
      "Parcheggio privato": "Privater Parkplatz",
      "Aria condizionata": "Klimaanlage",
      "Tra la Valle d’Itria e il mare Adriatico, in una posizione ideale per scoprire borghi, spiagge e sapori autentici.": "Zwischen dem Itria-Tal und der Adria, ideal gelegen fuer Doerfer, Straende und authentische Aromen.",
      "Monopoli centro": "Zentrum Monopoli",
      "APRI LA MAPPA ↗": "KARTE OEFFNEN ↗",
      "PAROLE DEGLI OSPITI": "STIMMEN DER GAESTE",
      "Chi arriva,<br>vuole tornare.": "Wer ankommt,<br>moechte wiederkommen.",
      "Riepilogo valutazioni Booking": "Booking-Bewertungsuebersicht",
      "Pulizia": "Sauberkeit",
      "Servizi": "Ausstattung",
      "Tutte": "Alle",
      "Mostra tutte le recensioni ↓": "Alle Bewertungen anzeigen ↓",
      "Mostra meno ↑": "Weniger anzeigen ↑",
      "PRENOTAZIONE DIRETTA": "DIREKTBUCHUNG",
      "Scegli la soluzione che preferisci, poi seleziona direttamente check-in e check-out dal calendario.": "Waehlen Sie Ihre Unterkunft und dann Check-in und Check-out direkt im Kalender.",
      "✓ Nessun pagamento ora": "✓ Keine Zahlung jetzt",
      "✓ Risposta diretta dall’host": "✓ Direkte Antwort vom Gastgeber",
      "SOLUZIONE PREFERITA": "BEVORZUGTE OPTION",
      "SOLUZIONE PREMIUM": "PREMIUM-OPTION",
      "Villa intera": "Ganze Villa",
      "4+2 OSPITI": "4+2 GAESTE",
      "4+1 OSPITI": "4+1 GAESTE",
      "4 OSPITI": "4 GAESTE",
      "fino a 4 ospiti": "bis zu 4 Gaeste",
      "fino a 5 ospiti": "bis zu 5 Gaeste",
      "fino a 6 ospiti": "bis zu 6 Gaeste",
      "fino a 15 ospiti": "bis zu 15 Gaeste",
      "Soggiorno minimo 5 notti. Eccezioni su richiesta via": "Mindestaufenthalt 5 Naechte. Ausnahmen auf Anfrage per",
      "Disponibilità WaCa Calendar": "WaCa-Kalender Verfuegbarkeit",
      "Seleziona una soluzione per vedere il calendario.": "Waehlen Sie eine Unterkunft, um den Kalender zu sehen.",
      "Mese precedente": "Vorheriger Monat",
      "Mese successivo": "Naechster Monat",
      "Disponibile": "Verfuegbar",
      "Non disponibile": "Nicht verfuegbar",
      "Selezionato": "Ausgewaehlt",
      "Adulti": "Erwachsene",
      "Ragazzi": "Kinder",
      "Nome completo": "Vollstaendiger Name",
      "Email o telefono": "E-Mail oder Telefon",
      "Chiedi disponibilità ↗": "Verfuegbarkeit anfragen ↗",
      "Si aprirà WhatsApp con la richiesta già compilata.": "WhatsApp oeffnet sich mit der bereits ausgefuellten Anfrage.",
      "Torna su ↑": "Nach oben ↑",
      "VERIFICA DISPONIBILITÀ": "VERFUEGBARKEIT PRUEFEN",
      "Aggiornamento disponibilità in corso…": "Verfuegbarkeit wird aktualisiert…",
      "Calendario temporaneamente non disponibile.": "Kalender voruebergehend nicht verfuegbar.",
      "Il soggiorno minimo è di 5 notti.": "Der Mindestaufenthalt betraegt 5 Naechte.",
      "Date selezionate. Completa i dati e invia la richiesta.": "Daten ausgewaehlt. Angaben ergaenzen und Anfrage senden.",
      "Seleziona prima una soluzione.": "Bitte zuerst eine Unterkunft auswaehlen.",
      "Invio richiesta…": "Anfrage wird gesendet…",
      "Richiesta preparata. Apertura WhatsApp…": "Anfrage vorbereitet. WhatsApp wird geoeffnet…"
    },
    gallery: {
      Piscina: "Pool",
      Patii: "Patios",
      Esterni: "Aussenbereiche",
      Camere: "Schlafzimmer",
      Interni: "Innenbereiche",
      foto: "Fotos"
    }
  }
};

await mkdir("dist", { recursive: true });

function absolutePath(path) {
  return `${siteUrl}${path === "/" ? "/" : path}`;
}

function alternateLinks(current) {
  const links = Object.entries(locales)
    .map(([code, locale]) => `<link rel="alternate" hreflang="${code}" href="${absolutePath(locale.path)}">`)
    .join("\n");
  return `${links}\n<link rel="alternate" hreflang="x-default" href="${absolutePath(locales.it.path)}">`;
}

function languageSwitch(current) {
  const items = [
    ["it", "/"],
    ["en", "/en"],
    ["fr", "/fr"],
    ["de", "/de"]
  ].map(([code, href]) => `<a href="${href}"${code === current ? ' class="active"' : ""}>${code.toUpperCase()}</a>`).join("");
  return `<span class="lang-switch" aria-label="Language selector">${items}</span>`;
}

function replaceAll(content, from, to) {
  return content.split(from).join(to);
}

function localizeGallery(content, gallery) {
  if (!gallery) return content;
  let html = content;
  for (const [from, to] of Object.entries(gallery)) {
    if (from === "foto") continue;
    html = replaceAll(html, `${from}:[`, `${to}:[`);
    html = replaceAll(html, `renderGallery("${from}")`, `renderGallery("${to}")`);
  }
  html = replaceAll(html, 'arr.length+" foto"', `arr.length+" ${gallery.foto}"`);
  return html;
}

function renderLocale(code) {
  const locale = locales[code];
  let html = source;
  const protectedBlocks = [];
  html = html.replace(/<div class="review-grid" id="reviewGrid">[\s\S]*?<\/div>\n<div class="review-actions">/, function(block) {
    const token = `__WACA_PROTECTED_BLOCK_${protectedBlocks.length}__`;
    protectedBlocks.push(block);
    return token;
  });
  html = html.replace('<html lang="it">', `<html lang="${locale.htmlLang}">`);
  html = html.replace(/<title>.*?<\/title>/, `<title>${locale.title}</title>`);
  html = html.replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${locale.description}">`);
  html = html.replace(/<link rel="canonical" href=".*?">/, `<link rel="canonical" href="${absolutePath(locale.path)}">\n${alternateLinks(code)}`);
  html = html.replace('<a class="navcta" href="#booking">Verifica disponibilità</a>', `${languageSwitch(code)}<a class="navcta" href="#booking">Verifica disponibilità</a>`);\n  html = html.replace("__WACA_MOBILE_LANGUAGE_SWITCH__", languageSwitch(code));
  html = replaceAll(html, 'toLocaleDateString("it-IT"', `toLocaleDateString("${locale.localeCode}"`);
  html = replaceAll(html, 'toLocaleTimeString("it-IT"', `toLocaleTimeString("${locale.localeCode}"`);
  if (locale.whatsappLine) {
    html = replaceAll(html, sourceWhatsappLine, locale.whatsappLine);
  }
  if (locale.availabilityUpdatedLine) {
    html = replaceAll(html, sourceAvailabilityUpdatedLine, locale.availabilityUpdatedLine);
  }
  html = localizeGallery(html, locale.gallery);
  const replacements = Object.entries(locale.replacements).sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of replacements) {
    html = replaceAll(html, from, to);
  }
  protectedBlocks.forEach((block, index) => {
    html = replaceAll(html, `__WACA_PROTECTED_BLOCK_${index}__`, block);
  });
  return html;
}

async function writeLocale(code) {
  const html = renderLocale(code);
  const locale = locales[code];
  if (code === "it") {
    await writeFile("dist/index.html", html);
    return;
  }
  const filename = `dist/${code}.html`;
  const directory = `dist/${code}`;
  await writeFile(filename, html);
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, html);
}

for (const code of Object.keys(locales)) {
  await writeLocale(code);
}

await copyFile("dream-select.html", "dist/dream-select.html");
await copyFile("heaven-select.html", "dist/heaven-select.html");
await copyFile("reviews-mock.html", "dist/reviews-mock.html");
console.log("WaCa static site built to dist with /en /fr /de.");
