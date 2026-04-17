import Link from "next/link";

const stats = [
  { label: "Active Deals", value: "12", change: "+3 this month", up: true },
  { label: "LOIs Sent", value: "28", change: "+6 this month", up: true },
  { label: "Avg. Cap Rate", value: "6.4%", change: "-0.2% vs last month", up: false },
  { label: "Total Deal Value", value: "$142M", change: "+$18M this month", up: true },
];

const deals = [
  {
    id: 1,
    name: "Oakwood Apartments",
    address: "2400 Oak St, Houston, TX",
    type: "Multifamily",
    units: 124,
    askPrice: "$8,200,000",
    noi: "$492,000",
    capRate: "6.0%",
    status: "LOI Sent",
    statusColor: "#22C55E",
    date: "Apr 14, 2026",
    stage: 5,
  },
  {
    id: 2,
    name: "Riverside Plaza",
    address: "500 River Rd, Dallas, TX",
    type: "Mixed-Use",
    units: 68,
    askPrice: "$5,500,000",
    noi: "$341,000",
    capRate: "6.2%",
    status: "Under Review",
    statusColor: "#F59E0B",
    date: "Apr 12, 2026",
    stage: 3,
  },
  {
    id: 3,
    name: "Summit Ridge",
    address: "900 Summit Dr, Austin, TX",
    type: "Multifamily",
    units: 200,
    askPrice: "$14,800,000",
    noi: "$814,000",
    capRate: "5.5%",
    status: "Processing",
    statusColor: "#3B82F6",
    date: "Apr 11, 2026",
    stage: 2,
  },
  {
    id: 4,
    name: "Greenway Commons",
    address: "1100 Greenway Blvd, San Antonio, TX",
    type: "Multifamily",
    units: 88,
    askPrice: "$6,750,000",
    noi: "$405,000",
    capRate: "6.0%",
    status: "LOI Sent",
    statusColor: "#22C55E",
    date: "Apr 8, 2026",
    stage: 5,
  },
  {
    id: 5,
    name: "Harbor View Lofts",
    address: "320 Harbor Dr, Corpus Christi, TX",
    type: "Apartment",
    units: 56,
    askPrice: "$3,900,000",
    noi: "$234,000",
    capRate: "6.0%",
    status: "Docs Uploaded",
    statusColor: "#8B5CF6",
    date: "Apr 7, 2026",
    stage: 1,
  },
];

const stageLabels = ["Docs Uploaded", "Processing", "Under Review", "LOI Generated", "LOI Sent"];

export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#1E293B" }}>Dashboard</h1>
          <p className="text-sm mt-0.5" style={{ color: "#64748B" }}>Welcome back, John. Here&apos;s your deal pipeline.</p>
        </div>
        <Link href="/deals/new">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-colors" style={{ background: "#1A2B4A" }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            New Deal
          </button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-5 border" style={{ borderColor: "#E2E8F0" }}>
            <p className="text-sm font-medium mb-2" style={{ color: "#64748B" }}>{s.label}</p>
            <p className="text-3xl font-bold mb-1" style={{ color: "#1E293B" }}>{s.value}</p>
            <p className="text-xs flex items-center gap-1" style={{ color: s.up ? "#22C55E" : "#EF4444" }}>
              <span>{s.up ? "▲" : "▼"}</span>
              {s.change}
            </p>
          </div>
        ))}
      </div>

      {/* Pipeline stages */}
      <div className="bg-white rounded-xl border p-5 mb-6" style={{ borderColor: "#E2E8F0" }}>
        <h2 className="text-sm font-semibold mb-4" style={{ color: "#1E293B" }}>Deal Pipeline</h2>
        <div className="flex gap-3">
          {[
            { label: "Docs Uploaded", count: 1, color: "#8B5CF6" },
            { label: "Processing", count: 1, color: "#3B82F6" },
            { label: "Under Review", count: 2, color: "#F59E0B" },
            { label: "LOI Generated", count: 1, color: "#D4A84B" },
            { label: "LOI Sent", count: 7, color: "#22C55E" },
          ].map((stage) => (
            <div key={stage.label} className="flex-1 rounded-lg p-4 text-center" style={{ background: `${stage.color}15` }}>
              <div className="text-2xl font-bold mb-1" style={{ color: stage.color }}>{stage.count}</div>
              <div className="text-xs font-medium" style={{ color: "#64748B" }}>{stage.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Deals table */}
      <div className="bg-white rounded-xl border" style={{ borderColor: "#E2E8F0" }}>
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "#E2E8F0" }}>
          <h2 className="font-semibold" style={{ color: "#1E293B" }}>Recent Deals</h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search deals..."
                className="pl-8 pr-4 py-1.5 text-sm rounded-lg border outline-none"
                style={{ borderColor: "#E2E8F0", color: "#1E293B", background: "#F8FAFC" }}
              />
              <svg className="absolute left-2.5 top-2 w-3.5 h-3.5" style={{ color: "#94A3B8" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <Link href="/history" className="text-sm font-medium" style={{ color: "#1A2B4A" }}>View all →</Link>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr style={{ background: "#F8FAFC" }}>
              {["Property", "Type", "Ask Price", "NOI", "Cap Rate", "Status", "Date", ""].map((h) => (
                <th key={h} className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "#94A3B8" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {deals.map((deal, i) => (
              <tr key={deal.id} className="border-t hover:bg-slate-50 transition-colors" style={{ borderColor: "#F1F5F9" }}>
                <td className="px-5 py-4">
                  <div>
                    <p className="font-medium text-sm" style={{ color: "#1E293B" }}>{deal.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>{deal.address}</p>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm" style={{ color: "#64748B" }}>{deal.type}</td>
                <td className="px-5 py-4 text-sm font-medium" style={{ color: "#1E293B" }}>{deal.askPrice}</td>
                <td className="px-5 py-4 text-sm" style={{ color: "#1E293B" }}>{deal.noi}</td>
                <td className="px-5 py-4">
                  <span className="text-sm font-semibold" style={{ color: parseFloat(deal.capRate) >= 6 ? "#22C55E" : "#F59E0B" }}>
                    {deal.capRate}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" style={{ background: `${deal.statusColor}20`, color: deal.statusColor }}>
                    {deal.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm" style={{ color: "#94A3B8" }}>{deal.date}</td>
                <td className="px-5 py-4">
                  <Link href={deal.status === "Processing" ? "/deals/processing" : "/deals/review"}>
                    <button className="text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors" style={{ color: "#1A2B4A", borderColor: "#1A2B4A" }}>
                      {deal.stage >= 4 ? "View LOI" : "Review"}
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
