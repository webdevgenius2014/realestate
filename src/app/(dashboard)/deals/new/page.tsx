import Link from "next/link";

const docTypes = [
  {
    id: "t12",
    label: "T-12 Operating Statement",
    desc: "12-month trailing income & expense report",
    icon: "📊",
    required: true,
    uploaded: true,
    file: "T12_Oakwood_2025.pdf",
    size: "1.2 MB",
  },
  {
    id: "rentroll",
    label: "Current Rent Roll",
    desc: "Unit-by-unit occupancy & rent detail",
    icon: "🏠",
    required: true,
    uploaded: true,
    file: "RentRoll_Oakwood_Apr2026.xlsx",
    size: "840 KB",
  },
  {
    id: "loi",
    label: "Existing LOI (Optional)",
    desc: "Prior LOI or offer letter for reference",
    icon: "✉️",
    required: false,
    uploaded: false,
    file: null,
    size: null,
  },
  {
    id: "om",
    label: "Offering Memorandum (Optional)",
    desc: "Broker OM or marketing package",
    icon: "📁",
    required: false,
    uploaded: false,
    file: null,
    size: null,
  },
];

export default function NewDealPage() {
  return (
    <div className="p-8 max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <Link href="/dashboard" className="flex items-center gap-1.5 text-sm mb-4" style={{ color: "#64748B" }}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold" style={{ color: "#1E293B" }}>New Deal</h1>
        <p className="text-sm mt-1" style={{ color: "#64748B" }}>Upload documents to start the underwriting process</p>
      </div>

      {/* Progress steps */}
      <div className="flex items-center gap-0 mb-8">
        {["Upload Docs", "Processing", "Review Data", "Generate LOI", "Send LOI"].map((step, i) => (
          <div key={step} className="flex items-center">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={i === 0 ? { background: "#1A2B4A", color: "#fff" } : { background: "#E2E8F0", color: "#94A3B8" }}
              >
                {i + 1}
              </div>
              <span className="text-sm font-medium" style={i === 0 ? { color: "#1A2B4A" } : { color: "#94A3B8" }}>
                {step}
              </span>
            </div>
            {i < 4 && <div className="w-8 h-px mx-2" style={{ background: "#E2E8F0" }} />}
          </div>
        ))}
      </div>

      {/* Deal name */}
      <div className="bg-white rounded-xl border p-6 mb-5" style={{ borderColor: "#E2E8F0" }}>
        <h2 className="font-semibold mb-4" style={{ color: "#1E293B" }}>Deal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Property Name</label>
            <input
              type="text"
              defaultValue="Oakwood Apartments"
              className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
              style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Property Type</label>
            <select
              className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
              style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
              defaultValue="multifamily"
            >
              <option value="multifamily">Multifamily</option>
              <option value="commercial">Commercial</option>
              <option value="mixed">Mixed-Use</option>
              <option value="retail">Retail</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Address</label>
            <input
              type="text"
              defaultValue="2400 Oak St, Houston, TX 77002"
              className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
              style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Asking Price</label>
            <input
              type="text"
              defaultValue="$8,200,000"
              className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
              style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
            />
          </div>
        </div>
      </div>

      {/* Document uploads */}
      <div className="bg-white rounded-xl border p-6 mb-6" style={{ borderColor: "#E2E8F0" }}>
        <h2 className="font-semibold mb-1" style={{ color: "#1E293B" }}>Upload Documents</h2>
        <p className="text-sm mb-5" style={{ color: "#64748B" }}>Supported formats: PDF, XLSX, XLS, CSV, DOCX</p>

        <div className="space-y-4">
          {docTypes.map((doc) => (
            <div key={doc.id}>
              {doc.uploaded ? (
                <div className="flex items-center gap-4 p-4 rounded-xl border" style={{ borderColor: "#22C55E", background: "#F0FDF4" }}>
                  <div className="text-2xl">{doc.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm" style={{ color: "#1E293B" }}>{doc.label}</p>
                      {doc.required && (
                        <span className="text-xs px-1.5 py-0.5 rounded font-medium" style={{ background: "#FEF3C7", color: "#D97706" }}>Required</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <svg className="w-3.5 h-3.5" style={{ color: "#22C55E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs" style={{ color: "#22C55E" }}>{doc.file}</span>
                      <span className="text-xs" style={{ color: "#94A3B8" }}>· {doc.size}</span>
                    </div>
                  </div>
                  <button className="text-xs px-3 py-1.5 rounded-lg border" style={{ color: "#64748B", borderColor: "#E2E8F0" }}>
                    Replace
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed rounded-xl p-5 text-center transition-colors hover:border-blue-300" style={{ borderColor: "#E2E8F0" }}>
                  <div className="text-2xl mb-2">{doc.icon}</div>
                  <p className="font-medium text-sm mb-0.5" style={{ color: "#1E293B" }}>{doc.label}</p>
                  <p className="text-xs mb-3" style={{ color: "#64748B" }}>{doc.desc}</p>
                  <button className="text-xs px-4 py-1.5 rounded-lg border font-medium" style={{ color: "#1A2B4A", borderColor: "#1A2B4A" }}>
                    + Upload File
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Drag & drop zone */}
        <div className="mt-4 border-2 border-dashed rounded-xl p-8 text-center" style={{ borderColor: "#CBD5E1", background: "#F8FAFC" }}>
          <svg className="w-10 h-10 mx-auto mb-3" style={{ color: "#CBD5E1" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="font-medium mb-1" style={{ color: "#64748B" }}>Drag & drop additional files here</p>
          <p className="text-sm" style={{ color: "#94A3B8" }}>or click to browse</p>
        </div>
      </div>

      {/* Action */}
      <div className="flex items-center justify-between">
        <Link href="/dashboard">
          <button className="px-6 py-2.5 rounded-lg text-sm font-medium border" style={{ color: "#64748B", borderColor: "#E2E8F0" }}>
            Cancel
          </button>
        </Link>
        <Link href="/deals/processing">
          <button className="px-8 py-2.5 rounded-lg text-white text-sm font-semibold" style={{ background: "#1A2B4A" }}>
            Start Processing →
          </button>
        </Link>
      </div>
    </div>
  );
}
