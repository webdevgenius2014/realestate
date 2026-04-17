import Link from "next/link";

const income = [
  { label: "Gross Potential Rent", value: "$1,142,400", note: "124 units × avg $912/mo" },
  { label: "Vacancy Loss (6.5%)", value: "($74,256)", note: "8 vacant units", negative: true },
  { label: "Other Income", value: "$28,800", note: "Laundry, parking, pet fees" },
  { label: "Effective Gross Income", value: "$1,096,944", bold: true },
];

const expenses = [
  { label: "Property Taxes", value: "$112,400" },
  { label: "Insurance", value: "$38,760" },
  { label: "Utilities", value: "$64,200" },
  { label: "Repairs & Maintenance", value: "$87,320" },
  { label: "Property Management (8%)", value: "$87,756" },
  { label: "Payroll / On-site Staff", value: "$96,000" },
  { label: "Admin & Marketing", value: "$22,400" },
  { label: "Reserves", value: "$55,000" },
  { label: "Total Operating Expenses", value: "$563,836", bold: true },
];

const rentRoll = [
  { unit: "101", type: "1BR/1BA", sqft: 650, tenant: "Occupied", rent: 850, market: 875, lease: "Jul 2026" },
  { unit: "102", type: "1BR/1BA", sqft: 650, tenant: "Occupied", rent: 875, market: 875, lease: "Sep 2026" },
  { unit: "103", type: "2BR/1BA", sqft: 900, tenant: "Occupied", rent: 1100, market: 1150, lease: "Nov 2026" },
  { unit: "104", type: "2BR/2BA", sqft: 1050, tenant: "Vacant", rent: 0, market: 1275, lease: "—" },
  { unit: "105", type: "1BR/1BA", sqft: 650, tenant: "Occupied", rent: 825, market: 875, lease: "Jun 2026" },
  { unit: "201", type: "3BR/2BA", sqft: 1250, tenant: "Occupied", rent: 1450, market: 1500, lease: "Feb 2027" },
];

export default function ReviewPage() {
  const noi = 1096944 - 563836;
  const askPrice = 8200000;
  const capRate = ((noi / askPrice) * 100).toFixed(2);
  const pricePerUnit = Math.round(askPrice / 124);
  const grossRentMult = (askPrice / 1096944).toFixed(2);
  const dscr = (noi / (askPrice * 0.065 * 0.7)).toFixed(2); // rough

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <Link href="/deals/processing" className="flex items-center gap-1.5 text-sm mb-3" style={{ color: "#64748B" }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <h1 className="text-2xl font-bold" style={{ color: "#1E293B" }}>Underwriting Review</h1>
          <p className="text-sm mt-1" style={{ color: "#64748B" }}>Oakwood Apartments · 2400 Oak St, Houston, TX · 124 Units</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/deals/edit">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium" style={{ color: "#1A2B4A", borderColor: "#1A2B4A" }}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit Data
            </button>
          </Link>
          <Link href="/deals/loi">
            <button className="flex items-center gap-2 px-5 py-2 rounded-lg text-white text-sm font-semibold" style={{ background: "#1A2B4A" }}>
              Generate LOI →
            </button>
          </Link>
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-0 mb-8">
        {["Upload Docs", "Processing", "Review Data", "Generate LOI", "Send LOI"].map((step, i) => (
          <div key={step} className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={i < 2 ? { background: "#22C55E", color: "#fff" } : i === 2 ? { background: "#1A2B4A", color: "#fff" } : { background: "#E2E8F0", color: "#94A3B8" }}>
                {i < 2 ? "✓" : i + 1}
              </div>
              <span className="text-sm font-medium" style={i === 2 ? { color: "#1A2B4A" } : i < 2 ? { color: "#22C55E" } : { color: "#94A3B8" }}>{step}</span>
            </div>
            {i < 4 && <div className="w-8 h-px mx-2" style={{ background: "#E2E8F0" }} />}
          </div>
        ))}
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {[
          { label: "NOI", value: `$${noi.toLocaleString()}`, sub: "Net Operating Income", color: "#22C55E" },
          { label: "Cap Rate", value: `${capRate}%`, sub: "vs 6.0% target", color: parseFloat(capRate) >= 6 ? "#22C55E" : "#EF4444" },
          { label: "Ask Price", value: "$8.2M", sub: `$${pricePerUnit.toLocaleString()}/unit`, color: "#1A2B4A" },
          { label: "GRM", value: grossRentMult, sub: "Gross Rent Multiplier", color: "#1A2B4A" },
          { label: "DSCR", value: dscr, sub: "Est. @ 70% LTV, 6.5%", color: parseFloat(dscr) >= 1.25 ? "#22C55E" : "#F59E0B" },
        ].map((m) => (
          <div key={m.label} className="bg-white rounded-xl border p-4" style={{ borderColor: "#E2E8F0" }}>
            <p className="text-xs font-medium mb-1" style={{ color: "#64748B" }}>{m.label}</p>
            <p className="text-2xl font-bold" style={{ color: m.color }}>{m.value}</p>
            <p className="text-xs mt-1" style={{ color: "#94A3B8" }}>{m.sub}</p>
          </div>
        ))}
      </div>

      {/* Confidence banner */}
      <div className="flex items-center gap-3 px-4 py-3 rounded-lg mb-6" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
        <svg className="w-5 h-5 flex-shrink-0" style={{ color: "#2563EB" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-sm" style={{ color: "#1E40AF" }}>
          <strong>95.4% average extraction confidence.</strong> All figures extracted from uploaded documents. Review and edit any values before generating your LOI.
        </p>
        <Link href="/deals/edit" className="ml-auto text-sm font-semibold flex-shrink-0" style={{ color: "#2563EB" }}>
          Review flags →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Income */}
        <div className="bg-white rounded-xl border" style={{ borderColor: "#E2E8F0" }}>
          <div className="px-5 py-4 border-b" style={{ borderColor: "#E2E8F0" }}>
            <h2 className="font-semibold" style={{ color: "#1E293B" }}>Income Statement</h2>
          </div>
          <div className="p-5 space-y-3">
            {income.map((row) => (
              <div key={row.label} className={`flex items-center justify-between ${row.bold ? "pt-3 border-t" : ""}`} style={row.bold ? { borderColor: "#E2E8F0" } : {}}>
                <div>
                  <p className={`text-sm ${row.bold ? "font-semibold" : ""}`} style={{ color: "#1E293B" }}>{row.label}</p>
                  {row.note && <p className="text-xs" style={{ color: "#94A3B8" }}>{row.note}</p>}
                </div>
                <span className={`text-sm ${row.bold ? "font-bold" : ""}`} style={{ color: row.negative ? "#EF4444" : row.bold ? "#1A2B4A" : "#1E293B" }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Expenses */}
        <div className="bg-white rounded-xl border" style={{ borderColor: "#E2E8F0" }}>
          <div className="px-5 py-4 border-b" style={{ borderColor: "#E2E8F0" }}>
            <h2 className="font-semibold" style={{ color: "#1E293B" }}>Operating Expenses</h2>
          </div>
          <div className="p-5 space-y-3">
            {expenses.map((row) => (
              <div key={row.label} className={`flex items-center justify-between ${row.bold ? "pt-3 border-t" : ""}`} style={row.bold ? { borderColor: "#E2E8F0" } : {}}>
                <p className={`text-sm ${row.bold ? "font-semibold" : ""}`} style={{ color: "#1E293B" }}>{row.label}</p>
                <span className={`text-sm ${row.bold ? "font-bold" : ""}`} style={{ color: row.bold ? "#EF4444" : "#1E293B" }}>
                  ({row.value})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rent Roll */}
      <div className="bg-white rounded-xl border" style={{ borderColor: "#E2E8F0" }}>
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "#E2E8F0" }}>
          <h2 className="font-semibold" style={{ color: "#1E293B" }}>Rent Roll Sample</h2>
          <p className="text-sm" style={{ color: "#64748B" }}>Showing 6 of 124 units</p>
        </div>
        <table className="w-full">
          <thead>
            <tr style={{ background: "#F8FAFC" }}>
              {["Unit", "Type", "Sq Ft", "Status", "Current Rent", "Market Rent", "Lease End"].map((h) => (
                <th key={h} className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "#94A3B8" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rentRoll.map((u) => (
              <tr key={u.unit} className="border-t" style={{ borderColor: "#F1F5F9" }}>
                <td className="px-4 py-3 text-sm font-medium" style={{ color: "#1E293B" }}>{u.unit}</td>
                <td className="px-4 py-3 text-sm" style={{ color: "#64748B" }}>{u.type}</td>
                <td className="px-4 py-3 text-sm" style={{ color: "#64748B" }}>{u.sqft.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={u.tenant === "Occupied" ? { background: "#DCFCE7", color: "#22C55E" } : { background: "#FEE2E2", color: "#EF4444" }}>
                    {u.tenant}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm font-medium" style={{ color: "#1E293B" }}>{u.rent ? `$${u.rent.toLocaleString()}` : "—"}</td>
                <td className="px-4 py-3 text-sm" style={{ color: u.rent < u.market && u.rent > 0 ? "#F59E0B" : "#64748B" }}>
                  ${u.market.toLocaleString()}
                  {u.rent > 0 && u.rent < u.market && <span className="ml-1 text-xs">(↑ ${u.market - u.rent} upside)</span>}
                </td>
                <td className="px-4 py-3 text-sm" style={{ color: "#64748B" }}>{u.lease}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-5 py-3 border-t text-center" style={{ borderColor: "#E2E8F0" }}>
          <button className="text-sm font-medium" style={{ color: "#1A2B4A" }}>View all 124 units →</button>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Link href="/deals/loi">
          <button className="px-8 py-3 rounded-lg text-white font-semibold" style={{ background: "#1A2B4A" }}>
            Generate LOI →
          </button>
        </Link>
      </div>
    </div>
  );
}
