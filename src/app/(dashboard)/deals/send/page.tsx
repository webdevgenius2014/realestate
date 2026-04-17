import Link from "next/link";

export default function SendLOIPage() {
  return (
    <div className="p-8 max-w-3xl">
      {/* Header */}
      <div className="mb-6">
        <Link href="/deals/loi" className="flex items-center gap-1.5 text-sm mb-3" style={{ color: "#64748B" }}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to LOI Preview
        </Link>
        <h1 className="text-2xl font-bold" style={{ color: "#1E293B" }}>Send LOI to Broker</h1>
        <p className="text-sm mt-1" style={{ color: "#64748B" }}>Oakwood Apartments · Final step before submission</p>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-0 mb-8">
        {["Upload Docs", "Processing", "Review Data", "Generate LOI", "Send LOI"].map((step, i) => (
          <div key={step} className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={i < 4 ? { background: "#22C55E", color: "#fff" } : { background: "#1A2B4A", color: "#fff" }}>
                {i < 4 ? "✓" : i + 1}
              </div>
              <span className="text-sm font-medium" style={i === 4 ? { color: "#1A2B4A" } : { color: "#22C55E" }}>{step}</span>
            </div>
            {i < 4 && <div className="w-8 h-px mx-2" style={{ background: "#E2E8F0" }} />}
          </div>
        ))}
      </div>

      {/* LOI summary card */}
      <div className="bg-white rounded-xl border p-5 mb-5" style={{ borderColor: "#E2E8F0" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" style={{ background: "#EFF6FF" }}>
              📄
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: "#1E293B" }}>LOI — Oakwood Apartments</p>
              <p className="text-xs mt-0.5" style={{ color: "#64748B" }}>Generated Apr 17, 2026 · v1.0 · 1 page</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href="/deals/loi">
              <button className="text-xs px-3 py-1.5 rounded-lg border" style={{ color: "#64748B", borderColor: "#E2E8F0" }}>Preview</button>
            </Link>
            <Link href="/deals/loi/edit">
              <button className="text-xs px-3 py-1.5 rounded-lg border" style={{ color: "#1A2B4A", borderColor: "#1A2B4A" }}>Edit</button>
            </Link>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t grid grid-cols-3 gap-4" style={{ borderColor: "#E2E8F0" }}>
          {[
            { label: "Offer Price", value: "$7,800,000" },
            { label: "Cap Rate", value: "6.7%" },
            { label: "Expiry", value: "Apr 21, 2026" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs" style={{ color: "#94A3B8" }}>{item.label}</p>
              <p className="font-semibold text-sm mt-0.5" style={{ color: "#1E293B" }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Email form */}
      <div className="bg-white rounded-xl border p-6 mb-5" style={{ borderColor: "#E2E8F0" }}>
        <h2 className="font-semibold mb-5" style={{ color: "#1E293B" }}>Email Details</h2>

        <div className="space-y-4">
          {/* To */}
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>To (Broker Email)</label>
            <div className="flex gap-2">
              <input
                type="email"
                defaultValue="m.reid@meridiancommercial.com"
                className="flex-1 px-4 py-2.5 rounded-lg border text-sm outline-none"
                style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
              />
              <button className="px-4 py-2.5 rounded-lg text-sm font-medium border" style={{ color: "#1A2B4A", borderColor: "#1A2B4A" }}>
                + CC
              </button>
            </div>
          </div>

          {/* CC (shown) */}
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>CC</label>
            <input
              type="email"
              placeholder="Additional recipients (comma separated)"
              className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
              style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Subject</label>
            <input
              type="text"
              defaultValue="Letter of Intent — Oakwood Apartments, 2400 Oak St, Houston TX"
              className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
              style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Message Body</label>
            <textarea
              rows={6}
              className="w-full px-4 py-3 rounded-lg border text-sm outline-none resize-none"
              style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
              defaultValue={`Hi Marcus,

Please find attached our Letter of Intent for the Oakwood Apartments at 2400 Oak Street, Houston, TX.

We are offering $7,800,000, reflecting a 6.7% cap rate on the trailing twelve-month NOI. We are prepared to move quickly and can have an executed PSA within the due diligence period.

The LOI is valid through April 21, 2026 at 5:00 PM CST. Please do not hesitate to reach out with any questions.

Best regards,
John Davis
Davis Capital Group
(713) 555-0182`}
            />
          </div>

          {/* Attachment */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
            <svg className="w-5 h-5 flex-shrink-0" style={{ color: "#64748B" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
            <span className="text-sm" style={{ color: "#1E293B" }}>LOI_Oakwood_Apartments_Apr2026.pdf</span>
            <span className="text-xs ml-auto" style={{ color: "#94A3B8" }}>142 KB</span>
          </div>
        </div>
      </div>

      {/* Send options */}
      <div className="bg-white rounded-xl border p-5 mb-6" style={{ borderColor: "#E2E8F0" }}>
        <h3 className="text-sm font-semibold mb-3" style={{ color: "#1E293B" }}>Send Options</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm" style={{ color: "#374151" }}>Save a copy to deal history</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm" style={{ color: "#374151" }}>Email me a confirmation copy</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="rounded" />
            <span className="text-sm" style={{ color: "#374151" }}>Schedule follow-up reminder (3 days)</span>
          </label>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <Link href="/deals/loi">
          <button className="px-5 py-2.5 rounded-lg border text-sm font-medium" style={{ color: "#64748B", borderColor: "#E2E8F0" }}>
            Back
          </button>
        </Link>
        <Link href="/deals/sent">
          <button className="flex items-center gap-2 px-8 py-3 rounded-lg text-white font-semibold" style={{ background: "#1A2B4A" }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Send LOI
          </button>
        </Link>
      </div>
    </div>
  );
}
