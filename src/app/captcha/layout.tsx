"use client";

import Providers from "../providers";

export default function CaptchaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers.ReCaptcha>{children}</Providers.ReCaptcha>;
}
