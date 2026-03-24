"use client";
import { useState } from "react";
import Link from "next/link";

const AGE_BANDS = [
  { id: "5-8",   label: "Ages 5–8",   emoji: "🧸", desc: "Early learners" },
  { id: "9-13",  label: "Ages 9–13",  emoji: "🎒", desc: "Middle school" },
  { id: "14-18", label: "Ages 14–18", emoji: "🎓", desc: "High school" },
  { id: "19-64", label: "Ages 19–64", emoji: "💼", desc: "Adults & workforce" },
  { id: "65plus",label: "Ages 65+",   emoji: "🌟", desc: "Seniors" },
];

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-blue-100 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-900">🇺🇸 American AI Learning Network</h1>
          <p className="text-sm text-blue-600">Powered by OpenMAIC · Aligned with the National AI Policy Framework</p>
        </div>
        <nav className="flex gap-4 text-sm font-medium">
          <Link href="/curriculum" className="text-blue-700 hover:underline">Curriculum Library</Link>
          <Link href="/parent-portal" className="text-blue-700 hover:underline">Parent Portal</Link>
          <Link href="/teacher-dashboard" className="text-blue-700 hover:underline">Teachers</Link>
          <Link href="/community-labs" className="text-blue-700 hover:underline">Find a Lab</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-4">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">AI Education for Every American</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
          Free, interactive AI classrooms for ages 5 to 120. Learn AI, Use AI, Create AI, and Protect yourself with AI.
        </p>
        <p className="text-sm text-gray-400 mb-8">Built on the White House National AI Policy Framework (March 2026)</p>
        <p className="text-blue-800 font-semibold text-lg mb-6">👇 Select your age group to begin</p>

        {/* Age Band Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {AGE_BANDS.map((band) => (
            <button
              key={band.id}
              onClick={() => setSelected(band.id)}
              className={`flex flex-col items-center px-6 py-5 rounded-2xl border-2 shadow-sm transition-all w-36 ${
                selected === band.id
                  ? "border-blue-600 bg-blue-600 text-white scale-105"
                  : "border-blue-200 bg-white text-blue-900 hover:border-blue-400"
              }`}
            >
              <span className="text-3xl mb-1">{band.emoji}</span>
              <span className="font-bold text-sm">{band.label}</span>
              <span className="text-xs mt-1 opacity-75">{band.desc}</span>
            </button>
          ))}
        </div>

        {selected && (
          <div className="mt-2">
            <Link
              href={`/curriculum?age=${selected}`}
              className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-bold shadow hover:bg-blue-800 transition"
            >
              View Lessons for {AGE_BANDS.find(b => b.id === selected)?.label} →
            </Link>
          </div>
        )}
      </section>

      {/* Four Pillars */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h3 className="text-2xl font-bold text-center text-blue-900 mb-8">Our Four Learning Pillars</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { color: "bg-yellow-100 border-yellow-400", emoji: "📖", title: "LEARN AI", desc: "Understand what AI is and how it works" },
            { color: "bg-green-100 border-green-400",  emoji: "🛠️", title: "USE AI",   desc: "Use AI tools effectively and responsibly" },
            { color: "bg-blue-100 border-blue-400",   emoji: "⚙️", title: "CREATE AI",desc: "Build your own AI projects and experiments" },
            { color: "bg-red-100 border-red-400",     emoji: "🛡️", title: "PROTECT",  desc: "Stay safe and protect your rights with AI" },
          ].map((p) => (
            <div key={p.title} className={`rounded-2xl border-2 p-5 text-center ${p.color}`}>
              <div className="text-4xl mb-2">{p.emoji}</div>
              <div className="font-bold text-sm mb-1">{p.title}</div>
              <div className="text-xs text-gray-600">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Framework Alignment Banner */}
      <section className="bg-blue-900 text-white py-10 px-4 text-center">
        <h3 className="text-xl font-bold mb-2">✅ Aligned with the White House National AI Policy Framework</h3>
        <p className="text-blue-200 max-w-2xl mx-auto text-sm">
          This platform implements all seven sections of the March 2026 National AI Legislative Recommendations —
          including child protection, community safeguards, free speech, innovation, workforce development, and federal standards.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6 text-xs">
          {["🛡️ Child Safety","🏘️ Community Protection","©️ IP Respect","🗣️ Free Speech","🚀 Innovation","💼 Workforce","⚖️ Federal Standards"].map(tag => (
            <span key={tag} className="bg-blue-700 px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 py-6">
        American AI Learning Network · Built on <a href="https://github.com/AfricanArchitect/OpenMAIC" className="underline">OpenMAIC</a> ·
        Aligned with the <span className="font-medium">National AI Policy Framework (March 2026)</span>
      </footer>
    </main>
  );
}
