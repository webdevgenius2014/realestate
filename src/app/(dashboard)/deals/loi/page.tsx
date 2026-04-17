import Link from "next/link";

const loiContent = `Davis Capital Group
1200 Post Oak Blvd, Suite 600
Houston, TX 77056
john@daviscapitalgroup.com | (713) 555-0182

April 17, 2026

Marcus Reid
Senior Vice President, Multifamily Investment Sales
Meridian Commercial Realty
500 Commerce St, Suite 1800
Dallas, TX 75201

RE: Letter of Intent to Purchase — Oakwood Apartments
      2400 Oak Street, Houston, TX 77002 (the "Property")

Dear Mr. Reid,

Davis Capital Group ("Buyer") is pleased to submit this non-binding Letter of Intent ("LOI") to purchase the above-referenced multifamily property, subject to the following terms and conditions:

1. PURCHASE PRICE: $7,800,000 (Seven Million Eight Hundred Thousand Dollars), payable in full at closing. This represents a cap rate of approximately 6.7% based on the trailing twelve-month NOI of $521,000.

2. EARNEST MONEY DEPOSIT: $150,000, deposited within 3 business days of Seller's acceptance. The deposit shall be refundable during the due diligence period and non-refundable thereafter, except in the event of Seller default.

3. DUE DILIGENCE PERIOD: 30 days from the execution of the Purchase and Sale Agreement ("PSA"). Buyer shall have the right to inspect the Property, review all financial records, leases, service contracts, and conduct any additional investigations deemed necessary.

4. FINANCING CONTINGENCY: This offer is contingent upon Buyer obtaining financing on terms satisfactory to Buyer within 21 days of the expiration of the due diligence period. Buyer anticipates utilizing conventional agency debt at approximately 65–70% LTV.

5. CLOSING: Closing to occur within 45 days following the expiration of the due diligence period, or as otherwise mutually agreed.

6. TITLE: Seller shall convey fee simple title, free and clear of all liens and encumbrances, except for standard permitted exceptions.

7. PRORATIONS & CLOSING COSTS: All rents, property taxes, insurance, and utility deposits shall be prorated as of the closing date. Each party shall bear its own legal costs; other closing costs to be split per local custom.

8. ASSIGNMENT: Buyer reserves the right to assign this agreement or take title in any entity Buyer designates.

9. CONFIDENTIALITY: Both parties agree to keep the terms of this LOI confidential.

10. EXPIRATION: This LOI shall expire at 5:00 PM CST on April 21, 2026 unless accepted in writing by Seller prior to that time.

This letter is intended as an expression of interest only and does not constitute a binding agreement. A binding agreement shall only exist upon execution of a mutually agreed-upon Purchase and Sale Agreement.

We look forward to your favorable response and are prepared to move expeditiously upon acceptance.

Sincerely,

John Davis
Managing Partner, Davis Capital Group
john@daviscapitalgroup.com | (713) 555-0182`;

export default function LOIPreviewPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <Link href="/deals/review" className="flex items-center gap-1.5 text-sm mb-3" style={{ color: "#64748B" }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Review
          </Link>
          <h1 className="text-2xl font-bold" style={{ color: "#1E293B" }}>LOI Preview</h1>
          <p className="text-sm mt-1" style={{ color: "#64748B" }}>Oakwood Apartments · Auto-generated from underwriting data</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium" style={{ color: "#64748B", borderColor: "#E2E8F0" }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </button>
          <Link href="/deals/loi/edit">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium" style={{ color: "#1A2B4A", borderColor: "#1A2B4A" }}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit LOI
            </button>
          </Link>
          <Link href="/deals/send">
            <button className="px-6 py-2 rounded-lg text-white text-sm font-semibold" style={{ background: "#1A2B4A" }}>
              Send to Broker →
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
                style={i < 3 ? { background: "#22C55E", color: "#fff" } : i === 3 ? { background: "#1A2B4A", color: "#fff" } : { background: "#E2E8F0", color: "#94A3B8" }}>
                {i < 3 ? "✓" : i + 1}
              </div>
              <span className="text-sm font-medium" style={i === 3 ? { color: "#1A2B4A" } : i < 3 ? { color: "#22C55E" } : { color: "#94A3B8" }}>{step}</span>
            </div>
            {i < 4 && <div className="w-8 h-px mx-2" style={{ background: "#E2E8F0" }} />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* LOI document */}
        <div className="col-span-2">
          <div className="bg-white rounded-xl border shadow-sm" style={{ borderColor: "#E2E8F0" }}>
            {/* Document toolbar */}
            <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "#E2E8F0", background: "#F8FAFC" }}>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded font-medium" style={{ background: "#DCFCE7", color: "#16A34A" }}>AI Generated</span>
                <span className="text-xs" style={{ color: "#64748B" }}>v1.0 · Apr 17, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs" style={{ color: "#94A3B8" }}>Page 1 of 1</span>
              </div>
            </div>

            {/* LOI content */}
            <div className="p-8 font-mono text-sm leading-7" style={{ color: "#1E293B", minHeight: "600px" }}>
              <pre className="whitespace-pre-wrap font-sans text-sm leading-7">{loiContent}</pre>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-4">
          {/* Deal summary */}
          <div className="bg-white rounded-xl border p-5" style={{ borderColor: "#E2E8F0" }}>
            <h3 className="font-semibold mb-4" style={{ color: "#1E293B" }}>Deal Summary</h3>
            <div className="space-y-3">
              {[
                { label: "Offer Price", value: "$7,800,000" },
                { label: "NOI (T-12)", value: "$521,000" },
                { label: "Implied Cap Rate", value: "6.7%" },
                { label: "Price / Unit", value: "$62,903" },
                { label: "Earnest Money", value: "$150,000" },
                { label: "DD Period", value: "30 days" },
                { label: "Closing", value: "75 days" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between text-sm">
                  <span style={{ color: "#64748B" }}>{item.label}</span>
                  <span className="font-medium" style={{ color: "#1E293B" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* LOI checklist */}
          <div className="bg-white rounded-xl border p-5" style={{ borderColor: "#E2E8F0" }}>
            <h3 className="font-semibold mb-3" style={{ color: "#1E293B" }}>LOI Checklist</h3>
            <div className="space-y-2">
              {[
                { item: "Purchase price defined", ok: true },
                { item: "Earnest money terms", ok: true },
                { item: "Due diligence period", ok: true },
                { item: "Financing contingency", ok: true },
                { item: "Closing timeline", ok: true },
                { item: "Title terms", ok: true },
                { item: "Assignment rights", ok: true },
                { item: "Expiration date set", ok: true },
              ].map((c) => (
                <div key={c.item} className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#22C55E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span style={{ color: "#374151" }}>{c.item}</span>
                </div>
              ))}
            </div>
          </div>

          <Link href="/deals/send">
            <button className="w-full py-3 rounded-lg text-white font-semibold text-sm" style={{ background: "#1A2B4A" }}>
              Send to Broker →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
