"use client";
import { useState, useEffect } from "react";
import { Cookie, X, ChevronDown, ChevronUp } from "lucide-react";

type Prefs = {
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customising, setCustomising] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ analytics: false, marketing: false });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const save = (p: Prefs) => {
    localStorage.setItem("cookie-consent", JSON.stringify({ ...p, essential: true }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden">
        {/* Main banner */}
        <div className="px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
            <Cookie size={20} className="text-amber-600" strokeWidth={1.5} />
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-stone-900 text-sm">We use cookies</p>
            <p className="text-stone-500 text-sm mt-0.5 leading-snug">
              We use cookies to improve your experience and understand how you use our site.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <button
              onClick={() => setCustomising((c) => !c)}
              className="flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300 px-4 py-2.5 rounded-full transition-colors"
            >
              Customise
              {customising ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            <button
              onClick={() => save({ analytics: true, marketing: true })}
              className="text-sm font-semibold bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full transition-colors"
            >
              Allow All
            </button>
          </div>

          <button
            onClick={() => save({ analytics: false, marketing: false })}
            className="absolute top-4 right-4 sm:static p-1.5 hover:bg-stone-100 rounded-full text-stone-400 transition-colors flex-shrink-0"
            aria-label="Reject non-essential cookies"
          >
            <X size={16} />
          </button>
        </div>

        {/* Customise panel */}
        {customising && (
          <div className="border-t border-stone-100 px-6 py-5 bg-stone-50 space-y-4">
            {/* Essential */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-stone-900">Essential Cookies</p>
                <p className="text-stone-500 text-xs mt-0.5">
                  Required for the site to function correctly. Cannot be disabled.
                </p>
              </div>
              <div className="w-10 h-6 bg-stone-300 rounded-full flex items-center px-1 flex-shrink-0 mt-0.5 cursor-not-allowed">
                <div className="w-4 h-4 bg-white rounded-full shadow ml-auto" />
              </div>
            </div>

            {/* Analytics */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-stone-900">Analytics Cookies</p>
                <p className="text-stone-500 text-xs mt-0.5">
                  Help us understand how visitors interact with the site.
                </p>
              </div>
              <button
                onClick={() => setPrefs((p) => ({ ...p, analytics: !p.analytics }))}
                className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors flex-shrink-0 mt-0.5 ${
                  prefs.analytics ? "bg-amber-500" : "bg-stone-300"
                }`}
                aria-label="Toggle analytics cookies"
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow transition-transform ${
                    prefs.analytics ? "translate-x-4" : ""
                  }`}
                />
              </button>
            </div>

            {/* Marketing */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-stone-900">Marketing Cookies</p>
                <p className="text-stone-500 text-xs mt-0.5">
                  Used to show you relevant content and ads across the web.
                </p>
              </div>
              <button
                onClick={() => setPrefs((p) => ({ ...p, marketing: !p.marketing }))}
                className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors flex-shrink-0 mt-0.5 ${
                  prefs.marketing ? "bg-amber-500" : "bg-stone-300"
                }`}
                aria-label="Toggle marketing cookies"
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow transition-transform ${
                    prefs.marketing ? "translate-x-4" : ""
                  }`}
                />
              </button>
            </div>

            <div className="flex gap-3 pt-1">
              <button
                onClick={() => save(prefs)}
                className="flex-1 bg-stone-900 hover:bg-stone-700 text-white py-2.5 rounded-full text-sm font-semibold transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={() => save({ analytics: true, marketing: true })}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2.5 rounded-full text-sm font-semibold transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
