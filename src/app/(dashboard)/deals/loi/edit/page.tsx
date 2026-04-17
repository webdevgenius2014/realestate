import Link from "next/link";

type LoiField = {
  label: string;
  value: string;
  type: string;
  options?: string[];
  placeholder?: string;
};

type LoiSection = {
  id: string;
  title: string;
  fields: LoiField[];
};

const loiSections: LoiSection[] = [
  {
    id: "offer",
    title: "Purchase Price & Terms",
    fields: [
      { label: "Offer Price", value: "$7,800,000", type: "text" },
      { label: "Earnest Money Deposit", value: "$150,000", type: "text" },
      { label: "EMD Refundable Period", value: "During due diligence period", type: "text" },
      { label: "Financing Contingency", value: "Yes — 21 days post-DD", type: "select", options: ["Yes — 21 days post-DD", "Yes — 30 days post-DD", "No financing contingency"] },
      { label: "LTV Target", value: "65–70%", type: "text" },
    ],
  },
  {
    id: "timeline",
    title: "Timeline",
    fields: [
      { label: "Due Diligence Period (days)", value: "30", type: "number" },
      { label: "Closing Period (days after DD)", value: "45", type: "number" },
      { label: "LOI Expiration Date", value: "April 21, 2026", type: "text" },
      { label: "Expiration Time", value: "5:00 PM CST", type: "text" },
    ],
  },
  {
    id: "parties",
    title: "Parties",
    fields: [
      { label: "Buyer Name / Entity", value: "Davis Capital Group", type: "text" },
      { label: "Buyer Address", value: "1200 Post Oak Blvd, Suite 600, Houston, TX 77056", type: "text" },
      { label: "Buyer Email", value: "john@daviscapitalgroup.com", type: "email" },
      { label: "Buyer Phone", value: "(713) 555-0182", type: "text" },
      { label: "Broker / Seller Rep Name", value: "Marcus Reid", type: "text" },
      { label: "Broker Company", value: "Meridian Commercial Realty", type: "text" },
    ],
  },
  {
    id: "other",
    title: "Other Terms",
    fields: [
      { label: "Assignment Rights", value: "Yes", type: "select", options: ["Yes", "No"] },
      { label: "Confidentiality", value: "Mutual — both parties", type: "select", options: ["Mutual — both parties", "One-way — buyer only", "None"] },
      { label: "Additional Notes / Custom Terms", value: "", type: "textarea", placeholder: "Add any custom terms, contingencies, or special conditions..." },
    ],
  },
];

export default function LOIEditPage() {
  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <Link href="/deals/loi" className="flex items-center gap-1.5 text-sm mb-3" style={{ color: "#64748B" }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to LOI Preview
          </Link>
          <h1 className="text-2xl font-bold" style={{ color: "#1E293B" }}>Edit LOI</h1>
          <p className="text-sm mt-1" style={{ color: "#64748B" }}>Oakwood Apartments · Customize the LOI before sending to the broker</p>
        </div>
        <div className="flex gap-3">
          <Link href="/deals/loi">
            <button className="px-4 py-2 rounded-lg border text-sm font-medium" style={{ color: "#64748B", borderColor: "#E2E8F0" }}>
              Cancel
            </button>
          </Link>
          <Link href="/deals/loi">
            <button className="px-5 py-2 rounded-lg text-white text-sm font-semibold" style={{ background: "#1A2B4A" }}>
              Save & Preview
            </button>
          </Link>
        </div>
      </div>

      {/* Template selector */}
      <div className="bg-white rounded-xl border p-5 mb-5" style={{ borderColor: "#E2E8F0" }}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold" style={{ color: "#1E293B" }}>LOI Template</h2>
            <p className="text-sm mt-0.5" style={{ color: "#64748B" }}>Select a starting template or use your custom saved template</p>
          </div>
          <div className="flex gap-2">
            {["Standard Multifamily", "Commercial / NNN", "Value-Add Aggressive", "My Custom Template"].map((t, i) => (
              <button
                key={t}
                className="px-3 py-1.5 rounded-lg text-xs font-medium border"
                style={i === 0 ? { background: "#1A2B4A", color: "#fff", borderColor: "#1A2B4A" } : { color: "#64748B", borderColor: "#E2E8F0" }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-5">
        {loiSections.map((section) => (
          <div key={section.id} className="bg-white rounded-xl border p-6" style={{ borderColor: "#E2E8F0" }}>
            <h2 className="font-semibold mb-4" style={{ color: "#1E293B" }}>{section.title}</h2>
            <div className="grid grid-cols-2 gap-4">
              {section.fields.map((field) => (
                <div key={field.label} className={field.type === "textarea" ? "col-span-2" : ""}>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>{field.label}</label>
                  {field.type === "select" ? (
                    <select
                      className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
                      style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
                      defaultValue={field.value}
                    >
                      {field.options?.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea
                      rows={4}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none resize-none"
                      style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
                      defaultValue={field.value}
                    />
                  ) : (
                    <input
                      type={field.type}
                      defaultValue={field.value}
                      className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
                      style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Custom text editor */}
      <div className="bg-white rounded-xl border p-6 mt-5" style={{ borderColor: "#E2E8F0" }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold" style={{ color: "#1E293B" }}>Full LOI Text Editor</h2>
          <span className="text-xs px-2 py-1 rounded" style={{ background: "#FEF3C7", color: "#92400E" }}>Advanced</span>
        </div>
        <p className="text-sm mb-3" style={{ color: "#64748B" }}>Directly edit the generated LOI text. Changes here override the structured fields above.</p>
        <textarea
          rows={10}
          className="w-full px-4 py-3 rounded-lg border text-sm outline-none resize-none font-mono"
          style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
          defaultValue={`Davis Capital Group is pleased to submit this non-binding Letter of Intent to purchase the above-referenced multifamily property...

1. PURCHASE PRICE: $7,800,000...
2. EARNEST MONEY DEPOSIT: $150,000...
3. DUE DILIGENCE PERIOD: 30 days...`}
        />
      </div>

      <div className="flex items-center justify-end gap-3 mt-6">
        <Link href="/deals/loi">
          <button className="px-5 py-2.5 rounded-lg border text-sm font-medium" style={{ color: "#64748B", borderColor: "#E2E8F0" }}>
            Cancel
          </button>
        </Link>
        <Link href="/deals/loi">
          <button className="px-6 py-2.5 rounded-lg text-white text-sm font-semibold" style={{ background: "#1A2B4A" }}>
            Save & Preview LOI
          </button>
        </Link>
      </div>
    </div>
  );
}
