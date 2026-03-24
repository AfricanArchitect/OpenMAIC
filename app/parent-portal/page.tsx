"use client";
import { useState } from "react";

const CONTENT_LEVELS = [
  { id: "5-8",  label: "Ages 5–8 Safe Mode",  desc: "Very simple language, no scary topics, parent-approved only", emoji: "🧸" },
  { id: "9-13", label: "Ages 9–13 Safe Mode", desc: "Age-appropriate, privacy education, no adult content", emoji: "🎒" },
  { id: "teen", label: "Teen Mode (14–18)",   desc: "Full curriculum, ethics & bias topics included", emoji: "🎓" },
];

export default function ParentPortal() {
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [contentLevel, setContentLevel] = useState("");
  const [screenTime, setScreenTime] = useState("30");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="bg-white border-b px-6 py-4">
        <h1 className="text-2xl font-bold text-green-900">👪 Parent & Guardian Portal</h1>
        <p className="text-sm text-gray-500">Aligned with National AI Framework — Section I: Protecting Children & Empowering Parents</p>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-10">
        {/* Framework Notice */}
        <div className="bg-green-100 border border-green-300 rounded-2xl p-4 mb-8 text-sm text-green-800">
          <strong>🛡️ Your rights under the National AI Framework:</strong> You have the right to control your
          child&apos;s privacy settings, screen time, content exposure, and account controls on this platform.
        </div>

        {/* Child Setup */}
        <section className="bg-white rounded-2xl shadow-sm border p-6 mb-6">
          <h2 className="font-bold text-lg text-gray-800 mb-4">👤 Child Account Setup</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-600 block mb-1">Child&apos;s First Name</label>
              <input value={childName} onChange={e => setChildName(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="First name only" />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600 block mb-1">Child&apos;s Age</label>
              <input value={childAge} onChange={e => setChildAge(e.target.value)}
                type="number" min="5" max="17"
                className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Age (5–17)" />
            </div>
          </div>
        </section>

        {/* Content Level */}
        <section className="bg-white rounded-2xl shadow-sm border p-6 mb-6">
          <h2 className="font-bold text-lg text-gray-800 mb-4">🔒 Content Safety Level</h2>
          <div className="space-y-3">
            {CONTENT_LEVELS.map(level => (
              <button key={level.id} onClick={() => setContentLevel(level.id)}
                className={`w-full text-left p-4 rounded-xl border-2 transition ${
                  contentLevel === level.id ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-green-300"
                }`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{level.emoji}</span>
                  <div>
                    <div className="font-semibold text-sm">{level.label}</div>
                    <div className="text-xs text-gray-500">{level.desc}</div>
                  </div>
                  {contentLevel === level.id && <span className="ml-auto text-green-600">✅</span>}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Screen Time */}
        <section className="bg-white rounded-2xl shadow-sm border p-6 mb-6">
          <h2 className="font-bold text-lg text-gray-800 mb-4">⏱️ Daily Screen Time Limit</h2>
          <div className="flex items-center gap-4">
            <input type="range" min="15" max="120" step="15"
              value={screenTime} onChange={e => setScreenTime(e.target.value)}
              className="flex-1" />
            <span className="text-lg font-bold text-green-700 w-20">{screenTime} min/day</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">Recommended: 30 minutes/day for ages 5–8, 45 minutes for 9–13</p>
        </section>

        {/* Privacy Notice */}
        <section className="bg-white rounded-2xl shadow-sm border p-6 mb-6">
          <h2 className="font-bold text-lg text-gray-800 mb-4">🔐 Privacy & Data Controls</h2>
          <div className="space-y-3 text-sm">
            {[
              { label: "Prevent use of child's data to train AI models", default: true },
              { label: "Prevent targeted content based on child's activity", default: true },
              { label: "Enable usage reports sent to parent email", default: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">{item.label}</span>
                <input type="checkbox" defaultChecked={item.default} className="w-4 h-4" />
              </div>
            ))}
          </div>
        </section>

        <button onClick={handleSave}
          className="w-full bg-green-700 text-white py-3 rounded-xl font-bold text-lg hover:bg-green-800 transition">
          {saved ? "✅ Settings Saved!" : "Save Settings"}
        </button>
      </div>
    </main>
  );
}
