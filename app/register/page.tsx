'use client';

import Script from "next/script";

export default function RegistrationForm() {
  return (
    <div className="mt-16 container mx-auto px-4">
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <iframe
              id="JotFormIFrame-253171134791556"
              title="ACOP College Registration Form"
              allowtransparency="true"
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/253171134791556"
              style="width:100%;height:600px;border:none;"
              scrolling="no">
            </iframe>
          `
        }}
      />
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="afterInteractive"
      />
      <Script id="jotform-handler" strategy="afterInteractive">
        {`
          if(window.jotformEmbedHandler){
            window.jotformEmbedHandler("iframe[id='JotFormIFrame-253171134791556']", "https://form.jotform.com/");
          }
        `}
      </Script>
    </div>
  );
}
