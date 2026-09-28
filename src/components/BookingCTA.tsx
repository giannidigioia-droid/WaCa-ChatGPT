import React, { useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Calendar,
  Mail,
  Phone,
  AtSign,
  X,
  ArrowRight,
} from 'lucide-react'

const EMAILJS_SERVICE_ID = 'service_udnxwt2'
const EMAILJS_TEMPLATE_ID = 'template_72hewse'
const EMAILJS_PUBLIC_KEY = '8lE8ILbaH1QxsXjFJ'
const GOOGLE_ADS_SEND_TO = 'AW-17975995747/pl2CCPyc1f4bEOPaz_tC'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

function gtag_report_conversion() {
  try {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: GOOGLE_ADS_SEND_TO,
        value: 1.0,
        currency: 'EUR',
      })
    }
  } catch {
    // never block UX
  }
  return false
}

function BookingSeal({ shellBg = '#f7f1e7', terracotta = '#b0663b' }) {
  return (
    <div
      className="h-[68px] w-[68px] rounded-full flex items-center justify-center"
      style={{
        background: terracotta,
        border: `4px solid ${shellBg}`,
        boxShadow: '0 6px 14px rgba(97, 54, 29, 0.18)',
      }}
      aria-label="Prenotazione diretta"
      title="Prenotazione diretta"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="21" stroke="#F8EFE3" strokeWidth="1.6" opacity="0.9" />
        <path
          d="M22 26.5H42"
          stroke="#F8EFE3"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M25 22.5V28"
          stroke="#F8EFE3"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M39 22.5V28"
          stroke="#F8EFE3"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect
          x="22"
          y="26"
          width="20"
          height="16"
          rx="2.5"
          stroke="#F8EFE3"
          strokeWidth="1.8"
        />
        <path
          d="M28 35L31 38L37 31.5"
          stroke="#F8EFE3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 14.5L33.8 18.2L37.9 18.8L34.9 21.7L35.6 25.8L32 23.9L28.4 25.8L29.1 21.7L26.1 18.8L30.2 18.2L32 14.5Z"
          fill="#F8EFE3"
          opacity="0.92"
        />
      </svg>
    </div>
  )
}

export function BookingCTA() {
  const [sending, setSending] = useState(false)
  const [sentOk, setSentOk] = useState<null | boolean>(null)
  const [errorMsg, setErrorMsg] = useState('')

  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [adults, setAdults] = useState<number>(2)
  const [children, setChildren] = useState<number>(0)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const isEmailValid =
    email.trim().length === 0 || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase())

  const isPhoneValid =
    phone.trim().length === 0 || phone.trim().replace(/\s+/g, '').length >= 6

  const hasAtLeastOneContact =
    (email.trim().length > 0 && isEmailValid) ||
    (phone.trim().length > 0 && isPhoneValid)

  const dateError = useMemo(() => {
    if (!checkIn || !checkOut) return ''
    if (checkOut <= checkIn) return 'Il check-out deve essere dopo il check-in.'
    return ''
  }, [checkIn, checkOut])

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0
    const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime()
    return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)))
  }, [checkIn, checkOut])

  const canSend =
    !!checkIn &&
    !!checkOut &&
    !dateError &&
    adults >= 1 &&
    children >= 0 &&
    fullName.trim().length > 1 &&
    hasAtLeastOneContact &&
    !sending

  const resetFeedback = () => {
    setSentOk(null)
    setErrorMsg('')
  }

  const resetForm = () => {
    setCheckIn('')
    setCheckOut('')
    setAdults(2)
    setChildren(0)
    setFullName('')
    setEmail('')
    setPhone('')
    setSentOk(null)
    setErrorMsg('')
  }

  const sendEmail = async () => {
    resetFeedback()

    if (!canSend) {
      setErrorMsg(
        dateError ||
          'Compila nome, date, ospiti e almeno un contatto valido tra email e cellulare.'
      )
      return
    }

    setSending(true)

    try {
      const templateParams = {
        title: 'Richiesta disponibilità WaCa',
        name: fullName.trim() || 'Ospite WaCa',
        checkin: checkIn,
        checkout: checkOut,
        nights: String(nights),
        adults: String(adults),
        children: String(children),
        email: email.trim() || '-',
        phone: phone.trim() || '-',
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      gtag_report_conversion()
      setSentOk(true)
    } catch {
      setSentOk(false)
      setErrorMsg(
        'Si è verificato un problema temporaneo nell’invio della richiesta. Ti consigliamo di contattarci via WhatsApp nella sezione Contact Us.'
      )
    } finally {
      setSending(false)
    }
  }

  const shellBg = '#f7f1e7'
  const terracotta = '#b0663b'
  const inputCls =
    'w-full h-[44px] border border-[#ebdfd0] bg-[#f9f4ec] px-3 text-[15px] text-[#8b8177] font-serif outline-none focus:border-[#bb8a63] focus:ring-1 focus:ring-[#bb8a63]'
  const labelCls =
    'block text-[10px] uppercase tracking-[0.04em] mb-1 text-[#b9aa98] font-serif'
  const thinBorder = 'border border-[rgba(216,197,176,0.85)]'

  return (
    <section
      id="booking"
      className="relative overflow-hidden px-4 py-14 md:py-20"
      style={{
        background:
          'linear-gradient(135deg, #a85d36 0%, #b56a3e 50%, #9b542f 100%)',
      }}
    >
      <div className="mx-auto max-w-[430px]">
        <div className="relative px-[10px] pt-4 pb-[10px]">
          <div
            className="absolute inset-y-[6px] left-[14px] right-0"
            style={{
              background: '#eadfce',
              border: '1px solid rgba(233,220,205,0.8)',
            }}
          />

          <div
            className="absolute inset-y-[3px] left-[7px] right-[7px]"
            style={{
              background: '#efe4d4',
              border: '1px solid rgba(228,212,194,0.9)',
            }}
          />

          <div
            className="relative"
            style={{
              background: shellBg,
              border: '1px solid #e8dccd',
              boxShadow: '0 18px 40px rgba(78, 39, 18, 0.18)',
            }}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20">
              <BookingSeal shellBg={shellBg} terracotta={terracotta} />
            </div>

            <div className="p-3 pt-8 md:p-4 md:pt-9">
              <div className={`relative p-3 md:p-4 ${thinBorder}`}>
                <div className="pointer-events-none absolute inset-0 opacity-[0.22]">
                  <div className="absolute left-2 top-2 h-7 w-7 border-l border-t border-[#e6d8c7]" />
                  <div className="absolute right-2 top-2 h-7 w-7 border-r border-t border-[#e6d8c7]" />
                  <div className="absolute left-2 bottom-2 h-7 w-7 border-l border-b border-[#e6d8c7]" />
                  <div className="absolute right-2 bottom-2 h-7 w-7 border-r border-b border-[#e6d8c7]" />
                </div>

                <div className="relative z-10">
                  {(sentOk === true || sentOk === false || errorMsg) && (
                    <div
                      className={`mb-3 p-2 text-[12px] font-serif leading-snug border ${
                        sentOk
                          ? 'border-green-300 bg-green-50 text-green-900'
                          : 'border-red-200 bg-red-50 text-red-900'
                      }`}
                    >
                      {sentOk === true && (
                        <div>✅ Richiesta inviata correttamente. Ti rispondiamo a breve.</div>
                      )}
                      {sentOk === false && <div>❌ {errorMsg}</div>}
                      {sentOk === null && errorMsg && <div>⚠️ {errorMsg}</div>}
                    </div>
                  )}

                  {sentOk !== true && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>Check-In</label>
                          <div className="relative">
                            <input
                              type="date"
                              value={checkIn}
                              onChange={(e) => {
                                setCheckIn(e.target.value)
                                resetFeedback()
                              }}
                              className={`${inputCls} pr-9`}
                            />
                            <Calendar
                              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#dfd3c6]"
                              aria-hidden="true"
                            />
                          </div>
                        </div>

                        <div>
                          <label className={labelCls}>Check-Out</label>
                          <div className="relative">
                            <input
                              type="date"
                              value={checkOut}
                              onChange={(e) => {
                                setCheckOut(e.target.value)
                                resetFeedback()
                              }}
                              className={`${inputCls} pr-9`}
                            />
                            <Calendar
                              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#dfd3c6]"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>

                      {dateError && (
                        <p className="mt-2 text-[11px] font-serif text-red-700">
                          {dateError}
                        </p>
                      )}

                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>Adulti</label>
                          <input
                            type="number"
                            min={1}
                            value={adults}
                            onChange={(e) => {
                              setAdults(Math.max(1, Number(e.target.value || 1)))
                              resetFeedback()
                            }}
                            className={inputCls}
                          />
                        </div>

                        <div>
                          <label className={labelCls}>Ragazzi</label>
                          <input
                            type="number"
                            min={0}
                            value={children}
                            onChange={(e) => {
                              setChildren(Math.max(0, Number(e.target.value || 0)))
                              resetFeedback()
                            }}
                            className={inputCls}
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className={labelCls}>Nome Completo</label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value)
                            resetFeedback()
                          }}
                          placeholder="Alessandro Rossi"
                          className={inputCls}
                        />
                      </div>

                      <div className="mt-4">
                        <label className={labelCls}>Email / Telefono</label>

                        <div className="space-y-3">
                          <div className="relative">
                            <AtSign
                              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#dfd3c6]"
                              aria-hidden="true"
                            />
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value)
                                resetFeedback()
                              }}
                              placeholder="a.rossi@email.it"
                              className={`${inputCls} pl-10`}
                            />
                          </div>

                          <div className="relative">
                            <Phone
                              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#dfd3c6]"
                              aria-hidden="true"
                            />
                            <input
                              type="tel"
                              value={phone}
                              onChange={(e) => {
                                setPhone(e.target.value)
                                resetFeedback()
                              }}
                              placeholder="+39 347 123 4567"
                              className={`${inputCls} pl-10`}
                              inputMode="tel"
                            />
                          </div>
                        </div>

                        {email.trim().length > 0 && !isEmailValid && (
                          <p className="mt-1 text-[11px] text-red-700 font-serif">
                            Email non valida.
                          </p>
                        )}

                        {phone.trim().length > 0 && !isPhoneValid && (
                          <p className="mt-1 text-[11px] text-red-700 font-serif">
                            Numero non valido.
                          </p>
                        )}
                      </div>

                      <div className="mt-5 flex justify-center">
                        <div
                          className="rounded-full px-5 py-2 font-serif text-[12px] uppercase tracking-[0.06em] text-[#7f7060]"
                          style={{
                            background: '#f6efe6',
                            border: '1px solid #d8ccbc',
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.75)',
                          }}
                        >
                          {nights > 0 ? `Totale: ${nights} notti` : 'Totale: - notti'}
                        </div>
                      </div>

                      <div className="mt-5">
                        <button
                          type="button"
                          onClick={sendEmail}
                          disabled={!canSend || !!dateError}
                          className={`group flex h-[48px] w-full items-center justify-center gap-2 font-serif text-[15px] uppercase tracking-[0.06em] transition-all duration-300 ${
                            !canSend || !!dateError
                              ? 'cursor-not-allowed bg-[#e4d6c7] text-[#a39587]'
                              : 'bg-[#b0663b] text-white shadow-md hover:bg-[#9b542f] hover:shadow-lg hover:-translate-y-0.5'
                          }`}
                          aria-label="Invia richiesta"
                        >
                          <Mail className="w-4 h-4" aria-hidden="true" />
                          <span>{sending ? 'Invio...' : 'Invia Richiesta'}</span>
                          <ArrowRight
                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[4px]"
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      <div className="mt-3 flex justify-center">
                        <button
                          type="button"
                          onClick={resetForm}
                          className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-serif text-[12px] text-[#7d6e60] transition-colors hover:bg-[#f4ebde]"
                          style={{
                            border: '1px solid #d9ccbc',
                            background: '#fbf6ef',
                            boxShadow: '0 1px 2px rgba(101, 73, 48, 0.05)',
                          }}
                          aria-label="Chiudi form"
                        >
                          <X className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Chiudi Form</span>
                        </button>
                      </div>
                    </>
                  )}

                  {sentOk === true && (
                    <div className="pt-2 flex justify-center">
                      <button
                        type="button"
                        onClick={resetForm}
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-serif text-[12px] text-[#7d6e60] transition-colors hover:bg-[#f4ebde]"
                        style={{
                          border: '1px solid #d9ccbc',
                          background: '#fbf6ef',
                        }}
                        aria-label="Chiudi form"
                      >
                        <X className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Chiudi Form</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
