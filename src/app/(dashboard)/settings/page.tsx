"use client";
import { useState } from "react";

const tabs = ["Profile", "Company", "LOI Template", "Email", "Notifications", "Integrations"];

function ProfileTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border p-6" style={{ borderColor: "#E2E8F0" }}>
        <h3 className="font-semibold mb-5" style={{ color: "#1E293B" }}>Personal Information</h3>
        <div className="flex items-center gap-5 mb-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ background: "#1A2B4A" }}>
            JD
          </div>
          <div>
            <p className="font-medium" style={{ color: "#1E293B" }}>John Davis</p>
            <p className="text-sm" style={{ color: "#64748B" }}>Managing Partner</p>
            <button className="text-sm mt-1 font-medium" style={{ color: "#1A2B4A" }}>Change photo</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "First Name", value: "John" },
            { label: "Last Name", value: "Davis" },
            { label: "Email Address", value: "john@daviscapitalgroup.com" },
            { label: "Phone Number", value: "(713) 555-0182" },
            { label: "Title / Role", value: "Managing Partner" },
            { label: "LinkedIn Profile", value: "linkedin.com/in/johndavis" },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>{f.label}</label>
              <input type="text" defaultValue={f.value} className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none" style={{ borderColor: "#E2E8F0", color: "#1E293B" }} />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border p-6" style={{ borderColor: "#E2E8F0" }}>
        <h3 className="font-semibold mb-4" style={{ color: "#1E293B" }}>Password</h3>
        <div className="grid grid-cols-2 gap-4">
          {["Current Password", "New Password", "Confirm Password"].map((f) => (
            <div key={f} className={f === "Confirm Password" ? "col-span-2 max-w-xs" : ""}>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>{f}</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none" style={{ borderColor: "#E2E8F0" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompanyTab() {
  return (
    <div className="bg-white rounded-xl border p-6" style={{ borderColor: "#E2E8F0" }}>
      <h3 className="font-semibold mb-5" style={{ color: "#1E293B" }}>Company / Fund Details</h3>
      <p className="text-sm mb-5" style={{ color: "#64748B" }}>This info is used in auto-generated LOIs and email signatures.</p>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Company Name", value: "Davis Capital Group" },
          { label: "Entity Type", value: "LLC", select: true, options: ["LLC", "LP", "Corporation", "Individual"] },
          { label: "Business Address", value: "1200 Post Oak Blvd, Suite 600" },
          { label: "City, State, ZIP", value: "Houston, TX 77056" },
          { label: "Company Email", value: "deals@daviscapitalgroup.com" },
          { label: "Company Phone", value: "(713) 555-0100" },
          { label: "Company Website", value: "daviscapitalgroup.com" },
          { label: "EIN / Tax ID", value: "**-*****89" },
        ].map((f) => (
          <div key={f.label}>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>{f.label}</label>
            {f.select ? (
              <select className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none" style={{ borderColor: "#E2E8F0", color: "#1E293B" }} defaultValue={f.value}>
                {f.options?.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : (
              <input type="text" defaultValue={f.value} className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none" style={{ borderColor: "#E2E8F0", color: "#1E293B" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function LOITemplateTab() {
  return (
    <div className="space-y-5">
      <div className="bg-white rounded-xl border p-6" style={{ borderColor: "#E2E8F0" }}>
        <h3 className="font-semibold mb-1" style={{ color: "#1E293B" }}>Default LOI Template</h3>
        <p className="text-sm mb-5" style={{ color: "#64748B" }}>Set defaults for all new LOIs. These can be overridden per deal.</p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Default Financing Contingency", value: "Yes — 21 days post-DD", select: true, options: ["Yes — 21 days post-DD", "Yes — 30 days post-DD", "No contingency"] },
            { label: "Default LTV Target", value: "65–70%" },
            { label: "Default DD Period (days)", value: "30" },
            { label: "Default Closing Period (days)", value: "45" },
            { label: "Default EMD Amount", value: "$150,000" },
            { label: "LOI Expiry (days from send)", value: "4" },
            { label: "Assignment Rights Default", value: "Yes", select: true, options: ["Yes", "No"] },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>{f.label}</label>
              {f.select ? (
                <select className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none" style={{ borderColor: "#E2E8F0", color: "#1E293B" }} defaultValue={f.value}>
                  {f.options?.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input type="text" defaultValue={f.value} className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none" style={{ borderColor: "#E2E8F0", color: "#1E293B" }} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl border p-6" style={{ borderColor: "#E2E8F0" }}>
        <h3 className="font-semibold mb-3" style={{ color: "#1E293B" }}>Custom Boilerplate Clauses</h3>
        <textarea rows={5} placeholder="Add any standard custom clauses that should be included in every LOI..." className="w-full px-4 py-3 rounded-lg border text-sm outline-none resize-none" style={{ borderColor: "#E2E8F0", color: "#1E293B" }} />
      </div>
    </div>
  );
}

function EmailTab() {
  return (
    <div className="space-y-5">
      <div className="bg-white rounded-xl border p-6" style={{ borderColor: "#E2E8F0" }}>
        <h3 className="font-semibold mb-1" style={{ color: "#1E293B" }}>Email Sending</h3>
        <p className="text-sm mb-5" style={{ color: "#64748B" }}>Configure how LOIs are sent to brokers.</p>
        <div className="space-y-3 mb-5">
          {[
            { label: "PropUnderwrite Email (default)", desc: "Sent from noreply@propunderwrite.com on your behalf", active: true },
            { label: "Custom SMTP", desc: "Use your own email server", active: false },
            { label: "Gmail / Google Workspace", desc: "Connect your Google account", active: false },
          ].map((opt) => (
            <label key={opt.label} className="flex items-start gap-3 p-4 rounded-lg cursor-pointer border" style={{ borderColor: opt.active ? "#1A2B4A" : "#E2E8F0", background: opt.active ? "#EFF6FF" : "#fff" }}>
              <input type="radio" name="emailMethod" defaultChecked={opt.active} className="mt-0.5" />
              <div>
                <p className="font-medium text-sm" style={{ color: "#1E293B" }}>{opt.label}</p>
                <p className="text-xs mt-0.5" style={{ color: "#64748B" }}>{opt.desc}</p>
              </div>
            </label>
          ))}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Reply-To Email</label>
          <input type="email" defaultValue="john@daviscapitalgroup.com" className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none max-w-sm" style={{ borderColor: "#E2E8F0", color: "#1E293B" }} />
        </div>
      </div>
      <div className="bg-white rounded-xl border p-6" style={{ borderColor: "#E2E8F0" }}>
        <h3 className="font-semibold mb-4" style={{ color: "#1E293B" }}>Email Signature</h3>
        <textarea rows={5} className="w-full px-4 py-3 rounded-lg border text-sm outline-none resize-none" style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
          defaultValue={`John Davis
Managing Partner, Davis Capital Group
(713) 555-0182 | john@daviscapitalgroup.com
daviscapitalgroup.com`} />
      </div>
    </div>
  );
}

function NotificationsTab() {
  const items = [
    { label: "LOI delivered confirmation", desc: "When the broker's server confirms receipt", on: true },
    { label: "LOI expiration reminder", desc: "24 hours before the LOI expires", on: true },
    { label: "Deal processing complete", desc: "When document extraction finishes", on: true },
    { label: "Low extraction confidence", desc: "When AI confidence is below 90%", on: true },
    { label: "Weekly deal summary", desc: "Weekly pipeline recap", on: false },
    { label: "Product updates", desc: "New features and improvements", on: false },
  ];
  return (
    <div className="bg-white rounded-xl border p-6" style={{ borderColor: "#E2E8F0" }}>
      <h3 className="font-semibold mb-5" style={{ color: "#1E293B" }}>Notification Preferences</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between py-2 border-b last:border-0" style={{ borderColor: "#F1F5F9" }}>
            <div>
              <p className="font-medium text-sm" style={{ color: "#1E293B" }}>{item.label}</p>
              <p className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>{item.desc}</p>
            </div>
            <div
              className="w-11 h-6 rounded-full relative cursor-pointer"
              style={{ background: item.on ? "#1A2B4A" : "#E2E8F0" }}
            >
              <div className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all"
                style={{ left: item.on ? "calc(100% - 1.25rem)" : "0.25rem" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IntegrationsTab() {
  const integrations = [
    { name: "Google Drive", desc: "Sync documents and LOIs to Google Drive", icon: "📁", connected: true },
    { name: "DocuSign", desc: "E-sign PSAs and closing docs", icon: "✍️", connected: false },
    { name: "Procore", desc: "Connect to project management", icon: "🏗️", connected: false },
    { name: "AppFolio", desc: "Import property data directly", icon: "🏢", connected: false },
    { name: "Buildium", desc: "Sync rent rolls from Buildium", icon: "📊", connected: false },
    { name: "Zapier", desc: "Connect to 5,000+ apps via Zapier", icon: "⚡", connected: false },
  ];
  return (
    <div className="grid grid-cols-2 gap-4">
      {integrations.map((i) => (
        <div key={i.name} className="bg-white rounded-xl border p-5 flex items-center gap-4" style={{ borderColor: "#E2E8F0" }}>
          <div className="text-3xl">{i.icon}</div>
          <div className="flex-1">
            <p className="font-semibold text-sm" style={{ color: "#1E293B" }}>{i.name}</p>
            <p className="text-xs mt-0.5" style={{ color: "#64748B" }}>{i.desc}</p>
          </div>
          <button
            className="text-xs px-3 py-1.5 rounded-lg font-medium border"
            style={i.connected ? { color: "#22C55E", borderColor: "#22C55E" } : { color: "#1A2B4A", borderColor: "#1A2B4A" }}
          >
            {i.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}
    </div>
  );
}

const tabContent: Record<string, React.ReactNode> = {
  Profile: <ProfileTab />,
  Company: <CompanyTab />,
  "LOI Template": <LOITemplateTab />,
  Email: <EmailTab />,
  Notifications: <NotificationsTab />,
  Integrations: <IntegrationsTab />,
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#1E293B" }}>Settings</h1>
          <p className="text-sm mt-0.5" style={{ color: "#64748B" }}>Manage your account, company, and preferences</p>
        </div>
        <button className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold" style={{ background: "#1A2B4A" }}>
          Save Changes
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 border-b" style={{ borderColor: "#E2E8F0" }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors"
            style={
              activeTab === tab
                ? { borderColor: "#1A2B4A", color: "#1A2B4A" }
                : { borderColor: "transparent", color: "#64748B" }
            }
          >
            {tab}
          </button>
        ))}
      </div>

      {tabContent[activeTab]}
    </div>
  );
}
