import Link from "next/link";

const steps = [
  { label: "Uploading documents", status: "done", time: "0.3s" },
  { label: "Parsing T-12 Operating Statement", status: "done", time: "4.1s" },
  { label: "Parsing Rent Roll", status: "done", time: "2.7s" },
  { label: "Extracting income & expense line items", status: "done", time: "3.2s" },
  { label: "Extracting unit mix & occupancy data", status: "done", time: "2.1s" },
  { label: "Calculating NOI & cap rate", status: "active", time: null },
  { label: "Validating financial data", status: "pending", time: null },
  { label: "Structuring underwriting report", status: "pending", time: null },
];

const extracted = [
  { label: "Total Units", value: "124", confidence: 98 },
  { label: "Occupancy Rate", value: "93.5%", confidence: 99 },
  { label: "Gross Rental Income", value: "$1,142,400", confidence: 96 },
  { label: "Vacancy Loss", value: "$74,556", confidence: 94 },
  { label: "Other Income", value: "$28,800", confidence: 91 },
  { label: "Total Revenue", value: "$1,096,644", confidence: 97 },
  { label: "Operating Expenses", value: "$604,644", confidence: 93 },
];

export default function ProcessingPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/deals/new" className="flex items-center gap-1.5 text-sm mb-4" style={{ color: "#64748B" }}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
        <h1 className="text-2xl font-bold" style={{ color: "#1E293B" }}>Processing Documents</h1>
        <p className="text-sm mt-1" style={{ color: "#64748B" }}>Oakwood Apartments · Houston, TX</p>
      </div>

      {/* Progress steps */}
      <div className="flex items-center gap-0 mb-8">
        {["Upload Docs", "Processing", "Review Data", "Generate LOI", "Send LOI"].map((step, i) => (
          <div key={step} className="flex items-center">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={
                  i < 1 ? { background: "#22C55E", color: "#fff" } :
                  i === 1 ? { background: "#1A2B4A", color: "#fff" } :
                  { background: "#E2E8F0", color: "#94A3B8" }
                }
              >
                {i < 1 ? "✓" : i + 1}
              </div>
              <span className="text-sm font-medium" style={i === 1 ? { color: "#1A2B4A" } : i < 1 ? { color: "#22C55E" } : { color: "#94A3B8" }}>
                {step}
              </span>
            </div>
            {i < 4 && <div className="w-8 h-px mx-2" style={{ background: "#E2E8F0" }} />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-6">
        {/* Left: processing steps */}
        <div className="col-span-3">
          <div className="bg-white rounded-xl border p-6 mb-5" style={{ borderColor: "#E2E8F0" }}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold" style={{ color: "#1E293B" }}>Extraction Progress</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#3B82F6" }} />
                <span className="text-sm" style={{ color: "#3B82F6" }}>Processing…</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs mb-1.5" style={{ color: "#64748B" }}>
                <span>Overall Progress</span>
                <span>62%</span>
              </div>
              <div className="w-full h-2 rounded-full" style={{ background: "#E2E8F0" }}>
                <div className="h-2 rounded-full transition-all" style={{ width: "62%", background: "#1A2B4A" }} />
              </div>
            </div>

            <div className="space-y-3">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.status === "done" && (
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#DCFCE7" }}>
                        <svg className="w-3.5 h-3.5" style={{ color: "#22C55E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                    {step.status === "active" && (
                      <div className="w-6 h-6 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
                    )}
                    {step.status === "pending" && (
                      <div className="w-6 h-6 rounded-full border-2" style={{ borderColor: "#E2E8F0" }} />
                    )}
                  </div>
                  <span
                    className="text-sm flex-1"
                    style={{ color: step.status === "pending" ? "#94A3B8" : "#1E293B" }}
                  >
                    {step.label}
                  </span>
                  {step.time && (
                    <span className="text-xs" style={{ color: "#94A3B8" }}>{step.time}</span>
                  )}
                  {step.status === "active" && (
                    <span className="text-xs" style={{ color: "#3B82F6" }}>running…</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Docs processed */}
          <div className="bg-white rounded-xl border p-5" style={{ borderColor: "#E2E8F0" }}>
            <h3 className="text-sm font-semibold mb-3" style={{ color: "#1E293B" }}>Documents</h3>
            <div className="space-y-2.5">
              {[
                { name: "T12_Oakwood_2025.pdf", pages: 8, status: "Processed" },
                { name: "RentRoll_Oakwood_Apr2026.xlsx", pages: 3, status: "Processed" },
              ].map((f) => (
                <div key={f.name} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: "#F8FAFC" }}>
                  <div className="text-xl">📄</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium" style={{ color: "#1E293B" }}>{f.name}</p>
                    <p className="text-xs" style={{ color: "#94A3B8" }}>{f.pages} pages</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: "#DCFCE7", color: "#22C55E" }}>
                    {f.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: live preview */}
        <div className="col-span-2">
          <div className="bg-white rounded-xl border p-5 sticky top-6" style={{ borderColor: "#E2E8F0" }}>
            <h3 className="text-sm font-semibold mb-4" style={{ color: "#1E293B" }}>Live Data Preview</h3>
            <p className="text-xs mb-4 px-3 py-2 rounded-lg" style={{ background: "#FFF7ED", color: "#92400E" }}>
              ⚡ Extracting data in real-time — final review available next
            </p>
            <div className="space-y-3">
              {extracted.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#64748B" }}>{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold" style={{ color: "#1E293B" }}>{item.value}</span>
                    <span className="text-xs px-1.5 py-0.5 rounded font-medium" style={{ background: item.confidence >= 95 ? "#DCFCE7" : "#FEF9C3", color: item.confidence >= 95 ? "#15803D" : "#854D0E" }}>
                      {item.confidence}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t" style={{ borderColor: "#E2E8F0" }}>
              <div className="flex items-center gap-2 text-xs mb-3" style={{ color: "#64748B" }}>
                <svg className="w-4 h-4" style={{ color: "#94A3B8" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Processing usually takes 30–90 seconds
              </div>
              <Link href="/deals/review">
                <button
                  className="w-full py-2.5 rounded-lg text-white text-sm font-semibold"
                  style={{ background: "#1A2B4A" }}
                >
                  Preview Results →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
