'use client'

import { ReCaptchaProvider } from "next-recaptcha-v3"

function ReCaptcha({children}: { children: React.ReactNode }) {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      {children}
    </ReCaptchaProvider>
  )
}

const Providers = {
    ReCaptcha
}

export default Providers;