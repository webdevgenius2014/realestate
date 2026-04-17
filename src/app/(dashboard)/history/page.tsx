import Link from "next/link";

const deals = [
  { id: 1, name: "Oakwood Apartments", address: "2400 Oak St, Houston, TX", type: "Multifamily", units: 124, askPrice: "$8,200,000", offerPrice: "$7,800,000", noi: "$533,108", capRate: "6.0%", status: "LOI Sent", statusColor: "#22C55E", date: "Apr 17, 2026", broker: "Marcus Reid" },
  { id: 2, name: "Riverside Plaza", address: "500 River Rd, Dallas, TX", type: "Mixed-Use", units: 68, askPrice: "$5,500,000", offerPrice: "—", noi: "$341,000", capRate: "6.2%", status: "Under Review", statusColor: "#F59E0B", date: "Apr 12, 2026", broker: "—" },
  { id: 3, name: "Summit Ridge", address: "900 Summit Dr, Austin, TX", type: "Multifamily", units: 200, askPrice: "$14,800,000", offerPrice: "—", noi: "$814,000", capRate: "5.5%", status: "Processing", statusColor: "#3B82F6", date: "Apr 11, 2026", broker: "—" },
  { id: 4, name: "Greenway Commons", address: "1100 Greenway Blvd, San Antonio, TX", type: "Multifamily", units: 88, askPrice: "$6,750,000", offerPrice: "$6,400,000", noi: "$405,000", capRate: "6.0%", status: "LOI Sent", statusColor: "#22C55E", date: "Apr 8, 2026", broker: "Lisa Tran" },
  { id: 5, name: "Harbor View Lofts", address: "320 Harbor Dr, Corpus Christi, TX", type: "Apartment", units: 56, askPrice: "$3,900,000", offerPrice: "—", noi: "$234,000", capRate: "6.0%", status: "Docs Uploaded", statusColor: "#8B5CF6", date: "Apr 7, 2026", broker: "—" },
  { id: 6, name: "Pecan Grove Flats", address: "780 Pecan Ln, Waco, TX", type: "Multifamily", units: 72, askPrice: "$4,200,000", offerPrice: "$3,900,000", noi: "$247,800", capRate: "5.9%", status: "Closed", statusColor: "#1A2B4A", date: "Mar 30, 2026", broker: "David Kim" },
  { id: 7, name: "Lakefront Towers", address: "220 Lakeview Ct, Fort Worth, TX", type: "Highrise", units: 310, askPrice: "$22,500,000", offerPrice: "$21,000,000", noi: "$1,260,000", capRate: "5.6%", status: "Closed", statusColor: "#1A2B4A", date: "Mar 18, 2026", broker: "Sarah Bloom" },
  { id: 8, name: "Mesa Verde Villas", address: "1400 Mesa Dr, El Paso, TX", type: "Garden Style", units: 96, askPrice: "$5,800,000", offerPrice: "—", noi: "$319,000", capRate: "5.5%", status: "Passed", statusColor: "#EF4444", date: "Mar 10, 2026", broker: "Ray Gomez" },
];

const statusOptions = ["All", "Processing", "Under Review", "LOI Sent", "Closed", "Passed"];

export default function HistoryPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#1E293B" }}>My Deals</h1>
          <p className="text-sm mt-0.5" style={{ color: "#64748B" }}>All underwriting deals — active and historical</p>
        </div>
        <Link href="/deals/new">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold" style={{ background: "#1A2B4A" }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            New Deal
          </button>
        </Link>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Deals", value: "8" },
          { label: "LOIs Sent", value: "4", sub: "this year" },
          { label: "Deals Closed", value: "2", sub: "this year" },
          { label: "Total Value Analyzed", value: "$71.7M", sub: "across all deals" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border p-4" style={{ borderColor: "#E2E8F0" }}>
            <p className="text-xs" style={{ color: "#94A3B8" }}>{s.label}</p>
            <p className="text-2xl font-bold mt-1 mb-0.5" style={{ color: "#1E293B" }}>{s.value}</p>
            {s.sub && <p className="text-xs" style={{ color: "#94A3B8" }}>{s.sub}</p>}
          </div>
        ))}
      </div>

      {/* Filters & search */}
      <div className="bg-white rounded-xl border" style={{ borderColor: "#E2E8F0" }}>
        <div className="flex items-center gap-4 px-5 py-4 border-b" style={{ borderColor: "#E2E8F0" }}>
          <div className="relative flex-1 max-w-xs">
            <input
              type="text"
              placeholder="Search deals, addresses..."
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border outline-none"
              style={{ borderColor: "#E2E8F0", color: "#1E293B", background: "#F8FAFC" }}
            />
            <svg className="absolute left-3 top-2.5 w-4 h-4" style={{ color: "#94A3B8" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex gap-2">
            {statusOptions.map((s, i) => (
              <button
                key={s}
                className="px-3 py-1.5 rounded-lg text-xs font-medium border"
                style={i === 0 ? { background: "#1A2B4A", color: "#fff", borderColor: "#1A2B4A" } : { color: "#64748B", borderColor: "#E2E8F0" }}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm" style={{ color: "#94A3B8" }}>Sort by:</span>
            <select className="text-sm border rounded-lg px-3 py-1.5 outline-none" style={{ borderColor: "#E2E8F0", color: "#1E293B" }}>
              <option>Date (newest)</option>
              <option>Cap Rate</option>
              <option>Price</option>
              <option>Status</option>
            </select>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr style={{ background: "#F8FAFC" }}>
              {["Property", "Type", "Units", "Ask Price", "Offer Price", "Cap Rate", "Status", "Date", ""].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "#94A3B8" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {deals.map((deal) => (
              <tr key={deal.id} className="border-t hover:bg-slate-50 transition-colors" style={{ borderColor: "#F1F5F9" }}>
                <td className="px-4 py-4">
                  <div>
                    <p className="font-medium text-sm" style={{ color: "#1E293B" }}>{deal.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>{deal.address}</p>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm" style={{ color: "#64748B" }}>{deal.type}</td>
                <td className="px-4 py-4 text-sm" style={{ color: "#64748B" }}>{deal.units}</td>
                <td className="px-4 py-4 text-sm font-medium" style={{ color: "#1E293B" }}>{deal.askPrice}</td>
                <td className="px-4 py-4 text-sm" style={{ color: deal.offerPrice !== "—" ? "#22C55E" : "#94A3B8" }}>
                  {deal.offerPrice}
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-semibold" style={{ color: parseFloat(deal.capRate) >= 6 ? "#22C55E" : "#F59E0B" }}>
                    {deal.capRate}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" style={{ background: `${deal.statusColor}20`, color: deal.statusColor }}>
                    {deal.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm" style={{ color: "#94A3B8" }}>{deal.date}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <Link href="/deals/review">
                      <button className="text-xs px-3 py-1.5 rounded-lg border" style={{ color: "#1A2B4A", borderColor: "#1A2B4A" }}>View</button>
                    </Link>
                    {deal.status === "LOI Sent" && (
                      <Link href="/deals/loi">
                        <button className="text-xs px-3 py-1.5 rounded-lg border" style={{ color: "#64748B", borderColor: "#E2E8F0" }}>LOI</button>
                      </Link>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-5 py-4 border-t" style={{ borderColor: "#E2E8F0" }}>
          <p className="text-sm" style={{ color: "#64748B" }}>Showing 8 of 8 deals</p>
          <div className="flex gap-1">
            {[1].map((p) => (
              <button key={p} className="w-8 h-8 rounded-lg text-sm font-medium" style={{ background: "#1A2B4A", color: "#fff" }}>{p}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
