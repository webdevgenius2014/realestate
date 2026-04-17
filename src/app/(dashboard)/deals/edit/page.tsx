import Link from "next/link";

const incomeFields = [
  { label: "Gross Potential Rent", value: "1,142,400", unit: "$", flag: null },
  { label: "Vacancy Rate", value: "6.5", unit: "%", flag: null },
  { label: "Other Income", value: "28,800", unit: "$", flag: "Low vs comparable properties" },
  { label: "Effective Gross Income", value: "1,096,944", unit: "$", flag: null, computed: true },
];

const expenseFields = [
  { label: "Property Taxes", value: "112,400", unit: "$", flag: null },
  { label: "Insurance", value: "38,760", unit: "$", flag: null },
  { label: "Utilities", value: "64,200", unit: "$", flag: null },
  { label: "Repairs & Maintenance", value: "87,320", unit: "$", flag: "High vs T-12 avg ($71,200)" },
  { label: "Property Management", value: "87,756", unit: "$", flag: null },
  { label: "Payroll / On-site Staff", value: "96,000", unit: "$", flag: null },
  { label: "Admin & Marketing", value: "22,400", unit: "$", flag: null },
  { label: "Reserves", value: "55,000", unit: "$", flag: null },
];

const propertyFields = [
  { label: "Total Units", value: "124", unit: "" },
  { label: "Year Built", value: "1998", unit: "" },
  { label: "Total Sq Ft", value: "115,000", unit: "" },
  { label: "Avg Unit Size", value: "927", unit: "sq ft" },
  { label: "Current Occupancy", value: "93.5", unit: "%" },
  { label: "Asking Price", value: "8,200,000", unit: "$" },
];

export default function EditPage() {
  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <Link href="/deals/review" className="flex items-center gap-1.5 text-sm mb-3" style={{ color: "#64748B" }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Review
          </Link>
          <h1 className="text-2xl font-bold" style={{ color: "#1E293B" }}>Edit Extracted Data</h1>
          <p className="text-sm mt-1" style={{ color: "#64748B" }}>Oakwood Apartments · Correct any AI extraction errors before generating the LOI</p>
        </div>
        <div className="flex gap-3">
          <Link href="/deals/review">
            <button className="px-4 py-2 rounded-lg border text-sm font-medium" style={{ color: "#64748B", borderColor: "#E2E8F0" }}>
              Discard Changes
            </button>
          </Link>
          <Link href="/deals/review">
            <button className="px-5 py-2 rounded-lg text-white text-sm font-semibold" style={{ background: "#1A2B4A" }}>
              Save Changes
            </button>
          </Link>
        </div>
      </div>

      {/* Flags alert */}
      <div className="flex items-start gap-3 p-4 rounded-xl mb-6" style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}>
        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#D97706" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <p className="text-sm font-semibold" style={{ color: "#92400E" }}>2 items flagged for review</p>
          <p className="text-sm mt-0.5" style={{ color: "#B45309" }}>
            AI detected values that may differ from industry norms. Review highlighted fields below.
          </p>
        </div>
      </div>

      {/* Property Info */}
      <div className="bg-white rounded-xl border p-6 mb-5" style={{ borderColor: "#E2E8F0" }}>
        <h2 className="font-semibold mb-4" style={{ color: "#1E293B" }}>Property Information</h2>
        <div className="grid grid-cols-3 gap-4">
          {propertyFields.map((f) => (
            <div key={f.label}>
              <label className="block text-xs font-medium mb-1" style={{ color: "#64748B" }}>{f.label}</label>
              <div className="relative">
                {f.unit === "$" && (
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: "#94A3B8" }}>$</span>
                )}
                <input
                  type="text"
                  defaultValue={f.value}
                  className="w-full px-3 py-2 rounded-lg border text-sm outline-none"
                  style={{ borderColor: "#E2E8F0", color: "#1E293B", paddingLeft: f.unit === "$" ? "1.5rem" : "0.75rem" }}
                />
                {f.unit && f.unit !== "$" && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs" style={{ color: "#94A3B8" }}>{f.unit}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Income */}
      <div className="bg-white rounded-xl border p-6 mb-5" style={{ borderColor: "#E2E8F0" }}>
        <h2 className="font-semibold mb-4" style={{ color: "#1E293B" }}>Income Statement</h2>
        <div className="space-y-4">
          {incomeFields.map((f) => (
            <div key={f.label}>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-medium flex items-center gap-2" style={{ color: "#374151" }}>
                  {f.label}
                  {f.computed && <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "#EFF6FF", color: "#2563EB" }}>Auto-calculated</span>}
                </label>
                {f.flag && (
                  <span className="text-xs flex items-center gap-1" style={{ color: "#D97706" }}>
                    ⚠ {f.flag}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: "#94A3B8" }}>$</span>
                  <input
                    type="text"
                    defaultValue={f.value}
                    disabled={!!f.computed}
                    className="w-full pl-6 pr-3 py-2.5 rounded-lg border text-sm outline-none"
                    style={{ borderColor: f.flag ? "#FDE68A" : "#E2E8F0", color: "#1E293B", background: f.computed ? "#F8FAFC" : "#fff" }}
                  />
                </div>
                {f.flag && (
                  <button className="text-xs px-3 py-2 rounded-lg border" style={{ borderColor: "#FDE68A", color: "#D97706", background: "#FFFBEB" }}>
                    View source
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expenses */}
      <div className="bg-white rounded-xl border p-6 mb-5" style={{ borderColor: "#E2E8F0" }}>
        <h2 className="font-semibold mb-4" style={{ color: "#1E293B" }}>Operating Expenses</h2>
        <div className="grid grid-cols-2 gap-4">
          {expenseFields.map((f) => (
            <div key={f.label}>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-medium" style={{ color: "#374151" }}>{f.label}</label>
                {f.flag && <span className="text-xs" style={{ color: "#D97706" }}>⚠ Flag</span>}
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: "#94A3B8" }}>$</span>
                <input
                  type="text"
                  defaultValue={f.value}
                  className="w-full pl-6 pr-3 py-2.5 rounded-lg border text-sm outline-none"
                  style={{ borderColor: f.flag ? "#FDE68A" : "#E2E8F0", color: "#1E293B" }}
                />
              </div>
              {f.flag && (
                <p className="text-xs mt-1" style={{ color: "#D97706" }}>{f.flag}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom actions */}
      <div className="flex items-center justify-between">
        <button className="text-sm flex items-center gap-1.5" style={{ color: "#64748B" }}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Re-extract from documents
        </button>
        <div className="flex gap-3">
          <Link href="/deals/review">
            <button className="px-5 py-2.5 rounded-lg border text-sm font-medium" style={{ color: "#64748B", borderColor: "#E2E8F0" }}>
              Cancel
            </button>
          </Link>
          <Link href="/deals/review">
            <button className="px-6 py-2.5 rounded-lg text-white text-sm font-semibold" style={{ background: "#1A2B4A" }}>
              Save & Return to Review
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
