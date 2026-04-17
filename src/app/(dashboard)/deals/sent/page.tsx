import Link from "next/link";

export default function SentPage() {
  return (
    <div className="p-8 flex items-center justify-center min-h-screen" style={{ background: "#F1F5F9" }}>
      <div className="max-w-xl w-full">
        {/* Success card */}
        <div className="bg-white rounded-2xl border shadow-sm p-10 text-center" style={{ borderColor: "#E2E8F0" }}>
          {/* Checkmark */}
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#DCFCE7" }}>
            <svg className="w-10 h-10" style={{ color: "#16A34A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold mb-2" style={{ color: "#1E293B" }}>LOI Sent Successfully!</h1>
          <p className="mb-1" style={{ color: "#64748B" }}>
            Your LOI for <strong style={{ color: "#1E293B" }}>Oakwood Apartments</strong> has been delivered to:
          </p>
          <p className="font-semibold mb-6" style={{ color: "#1A2B4A" }}>m.reid@meridiancommercial.com</p>

          {/* Summary */}
          <div className="rounded-xl p-5 mb-6 text-left" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Property", value: "Oakwood Apartments" },
                { label: "Offer Price", value: "$7,800,000" },
                { label: "Sent To", value: "Marcus Reid" },
                { label: "Sent At", value: "Apr 17, 2026 · 2:34 PM" },
                { label: "LOI Expires", value: "Apr 21, 2026" },
                { label: "Status", value: "Delivered ✓" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs" style={{ color: "#94A3B8" }}>{item.label}</p>
                  <p className="font-medium text-sm mt-0.5" style={{ color: "#1E293B" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="text-left mb-6">
            <p className="text-sm font-semibold mb-3" style={{ color: "#1E293B" }}>What happens next</p>
            <div className="space-y-3">
              {[
                { time: "Now", text: "Broker receives LOI via email", done: true },
                { time: "Apr 21", text: "LOI expiration — follow up if no response", done: false },
                { time: "TBD", text: "Negotiate & execute PSA", done: false },
                { time: "~Day 30", text: "Due diligence period begins", done: false },
                { time: "~Day 75", text: "Closing", done: false },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="w-16 flex-shrink-0 text-xs font-medium text-right mt-0.5" style={{ color: item.done ? "#22C55E" : "#94A3B8" }}>
                    {item.time}
                  </div>
                  <div className="w-px self-stretch mx-1" style={{ background: "#E2E8F0" }} />
                  <p className="text-sm" style={{ color: item.done ? "#1E293B" : "#64748B" }}>
                    {item.done && <span className="mr-1">✓</span>}
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium" style={{ color: "#64748B", borderColor: "#E2E8F0" }}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download LOI
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium" style={{ color: "#64748B", borderColor: "#E2E8F0" }}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Link
              </button>
            </div>
            <Link href="/deals/new">
              <button className="w-full py-3 rounded-lg text-white font-semibold text-sm" style={{ background: "#1A2B4A" }}>
                Start New Deal
              </button>
            </Link>
            <Link href="/dashboard">
              <button className="w-full py-2.5 rounded-lg text-sm font-medium" style={{ color: "#64748B" }}>
                Back to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
