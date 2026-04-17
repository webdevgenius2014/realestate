import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-full flex" style={{ background: "#F1F5F9" }}>
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12" style={{ background: "#0F1C2E" }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#D4A84B" }}>
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-none">PropUnderwrite</p>
            <p className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>RE Automation Platform</p>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-white leading-tight mb-6">
            Start underwriting<br />
            <span style={{ color: "#D4A84B" }}>smarter deals</span><br />
            today
          </h1>
          <div className="space-y-6">
            {[
              { step: "1", title: "Upload your documents", desc: "T-12, Rent Roll, and LOI — any format" },
              { step: "2", title: "Review extracted data", desc: "AI pulls all key financials automatically" },
              { step: "3", title: "Send your LOI", desc: "One click to the broker's inbox" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-white" style={{ background: "#D4A84B" }}>
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-sm" style={{ color: "#94A3B8" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm" style={{ color: "#64748B" }}>
          Free to start. No credit card required.
        </p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-sm border p-8" style={{ borderColor: "#E2E8F0" }}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-1" style={{ color: "#1E293B" }}>Create your account</h2>
              <p style={{ color: "#64748B" }}>Get started for free — no credit card needed</p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>First name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
                    style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Last name</label>
                  <input
                    type="text"
                    placeholder="Davis"
                    className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
                    style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Email address</label>
                <input
                  type="email"
                  placeholder="john@realty.com"
                  className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
                  style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Company / Fund name</label>
                <input
                  type="text"
                  placeholder="Davis Capital Group"
                  className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
                  style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Password</label>
                <input
                  type="password"
                  placeholder="Min. 8 characters"
                  className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
                  style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input type="checkbox" id="terms" className="mt-0.5 rounded" />
                <label htmlFor="terms" className="text-sm" style={{ color: "#64748B" }}>
                  I agree to the{" "}
                  <a href="#" style={{ color: "#1A2B4A" }} className="font-medium">Terms of Service</a>
                  {" "}and{" "}
                  <a href="#" style={{ color: "#1A2B4A" }} className="font-medium">Privacy Policy</a>
                </label>
              </div>

              <Link href="/dashboard">
                <button
                  type="button"
                  className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-colors"
                  style={{ background: "#1A2B4A" }}
                >
                  Create Account
                </button>
              </Link>
            </form>

            <div className="mt-4 pt-4 border-t text-center" style={{ borderColor: "#E2E8F0" }}>
              <p className="text-sm" style={{ color: "#64748B" }}>
                Already have an account?{" "}
                <Link href="/login" className="font-semibold" style={{ color: "#1A2B4A" }}>
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
