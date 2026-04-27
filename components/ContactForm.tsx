"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);

    if (!ref.current) return;

    // Clear previous instance
    ref.current.innerHTML = "";

    // Re-inject EXACT HubSpot embed markup
    const script = document.createElement("script");
    script.src = "https://js-eu1.hsforms.net/forms/embed/144428117.js";
    script.defer = true;

    const container = document.createElement("div");
    container.className = "hs-form-frame";
    container.setAttribute("data-region", "eu1");
    container.setAttribute(
      "data-form-id",
      "5d872d9b-fa4b-4b6a-8cb8-9cb6dec1afc5"
    );
    container.setAttribute("data-portal-id", "144428117");

    ref.current.appendChild(container);
    ref.current.appendChild(script);

    // Check for iframe to hide loading
    const check = setInterval(() => {
      const iframe = ref.current?.querySelector("iframe");
      if (iframe) {
        setLoading(false);
        clearInterval(check);
      }
    }, 200);

    // Fallback timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(check);
    };
  }, [pathname]);

  return (
    <div>
      {loading && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-orange-600 border-t-transparent animate-spin"></div>
          </div>
          <p className="mt-4 text-gray-500 text-sm">Loading contact form...</p>
        </div>
      )}

      <div ref={ref} />
    </div>
  );
}