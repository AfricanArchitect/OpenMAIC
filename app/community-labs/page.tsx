"use client";
import { useState } from "react";

const SAMPLE_LABS = [
  { name: "Dunwoody Library AI Lab",         city: "Dunwoody, GA",    type: "Public Library",     hours: "Mon–Sat 10am–6pm",  ages: "All ages" },
  { name: "Atlanta Metro Community AI Hub",  city: "Atlanta, GA",     type: "Community College",  hours: "Mon–Fri 9am–5pm",   ages: "14+" },
  { name: "Georgia Tech AALN Innovation Lab",city: "Atlanta, GA",     type: "University",         hours: "Mon–Fri 8am–8pm",   ages: "18+" },
  { name: "Roswell Senior AI Center",        city: "Roswell, GA",     type: "Senior Center",      hours: "Tue & Thu 10am–2pm",ages: "65+" },
  { name: "Sandy Springs STEM Lab",          city: "Sandy Springs, GA",type:"K-12 School Lab",    hours: "After school 3–5pm", ages: "5–18" },
];

export default function CommunityLabs() {
  const [zip, setZip] = useState("");
  const [searched, setSearched] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <header className="bg-white border-b px-6 py-4">
        <h1 className="text-2xl font-bold text-orange-900">🗺️ Find a Community AI Lab Near You</h1>
        <p className="text-sm text-gray-500">Free AI learning labs at libraries, schools, community colleges, and senior centers nationwide</p>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Search */}
        <div className="flex gap-3 mb-8">
          <input value={zip} onChange={e => setZip(e.target.value)}
            placeholder="Enter your ZIP code"
            className="flex-1 border rounded-xl px-4 py-3 text-sm shadow-sm"
          />
          <button onClick={() => setSearched(true)}
            className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-orange-700 transition">
            Find Labs
          </button>
        </div>

        {/* Results */}
        {searched && (
          <div className="space-y-4">
            <p className="text-sm text-gray-500 mb-2">Showing labs near <strong>{zip || "your area"}</strong>:</p>
            {SAMPLE_LABS.map((lab, i) => (
              <div key={i} className="bg-white border rounded-2xl p-5 shadow-sm flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">{lab.name}</h3>
                  <p className="text-sm text-gray-500">{lab.city} · {lab.type}</p>
                  <p className="text-xs text-gray-400 mt-1">⏰ {lab.hours} · 👥 {lab.ages}</p>
                </div>
                <button className="ml-4 bg-orange-600 text-white text-xs px-3 py-2 rounded-lg hover:bg-orange-700 whitespace-nowrap">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        )}

        {!searched && (
          <div className="text-center py-10 text-gray-400">
            <p className="text-5xl mb-3">📍</p>
            <p>Enter your ZIP code to find AI labs and learning centers near you.</p>
          </div>
        )}

        {/* Add Your Lab */}
        <div className="mt-12 bg-orange-100 border border-orange-300 rounded-2xl p-6">
          <h3 className="font-bold text-orange-900 mb-2">➕ Add Your Organization</h3>
          <p className="text-sm text-orange-800 mb-4">
            Libraries, schools, community colleges, and senior centers can register as AALN Community AI Labs
            to receive free curriculum, teacher training, and platform access.
          </p>
          <button className="bg-orange-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-orange-800">
            Register Your Organization
          </button>
        </div>
      </div>
    </main>
  );
}
