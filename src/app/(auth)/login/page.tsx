import Link from "next/link";

export default function LoginPage() {
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
            Underwrite deals<br />
            <span style={{ color: "#D4A84B" }}>10x faster</span><br />
            with AI
          </h1>
          <p className="text-lg mb-10" style={{ color: "#94A3B8" }}>
            Upload T-12s and Rent Rolls. Get NOI, cap rates, and a ready-to-send LOI in minutes — not hours.
          </p>
          <div className="space-y-4">
            {[
              { icon: "📄", text: "Automatic document parsing & data extraction" },
              { icon: "📊", text: "Instant NOI, cap rate & DSCR calculations" },
              { icon: "✉️", text: "AI-generated LOI sent directly to broker" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span style={{ color: "#CBD5E1" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {["#D4A84B", "#22C55E", "#3B82F6", "#8B5CF6"].map((c, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0F1C2E]" style={{ background: c }} />
            ))}
          </div>
          <p style={{ color: "#94A3B8" }} className="text-sm">
            Trusted by <strong className="text-white">240+</strong> real estate investors
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-sm border p-8" style={{ borderColor: "#E2E8F0" }}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-1" style={{ color: "#1E293B" }}>Welcome back</h2>
              <p style={{ color: "#64748B" }}>Sign in to your account to continue</p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>
                  Email address
                </label>
                <input
                  type="email"
                  defaultValue="john@realty.com"
                  className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none focus:ring-2"
                  style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-medium" style={{ color: "#374151" }}>Password</label>
                  <a href="#" className="text-sm" style={{ color: "#D4A84B" }}>Forgot password?</a>
                </div>
                <input
                  type="password"
                  defaultValue="••••••••"
                  className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none focus:ring-2"
                  style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="rounded" />
                <label htmlFor="remember" className="text-sm" style={{ color: "#64748B" }}>Remember me for 30 days</label>
              </div>

              <Link href="/dashboard">
                <button
                  type="button"
                  className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-colors mt-1"
                  style={{ background: "#1A2B4A" }}
                >
                  Sign In
                </button>
              </Link>
            </form>

            <div className="mt-4 pt-4 border-t text-center" style={{ borderColor: "#E2E8F0" }}>
              <p className="text-sm" style={{ color: "#64748B" }}>
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="font-semibold" style={{ color: "#1A2B4A" }}>
                  Create one free
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
