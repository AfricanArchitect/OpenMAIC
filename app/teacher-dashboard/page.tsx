"use client";
import { useState } from "react";
import Link from "next/link";

const SAMPLE_STUDENTS = [
  { name: "Alex M.",    age: 12, completed: 3, lastLesson: "How Does AI Think?",     score: 92 },
  { name: "Jordan T.", age: 11, completed: 2, lastLesson: "Ask the AI Helper",       score: 85 },
  { name: "Riley K.",  age: 13, completed: 4, lastLesson: "Deepfakes & Digital Rights",score: 78 },
  { name: "Sam P.",    age: 12, completed: 1, lastLesson: "Meet the Robots!",         score: 96 },
];

const QUICK_ASSIGN = [
  { title: "How Does AI Think?",          pillar: "📖 Learn",   age: "9–13" },
  { title: "AI for School: Tools & Rules",pillar: "🛠️ Use",     age: "9–13" },
  { title: "Build a Simple AI Classifier",pillar: "⚙️ Create",  age: "9–13" },
  { title: "Deepfakes & Digital Rights",  pillar: "🛡️ Protect", age: "9–13" },
];

export default function TeacherDashboard() {
  const [tab, setTab] = useState<"roster"|"assign"|"reports">("roster");

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-6 py-4">
        <h1 className="text-2xl font-bold text-purple-900">🏫 Teacher & Admin Dashboard</h1>
        <p className="text-sm text-gray-500">Aligned with National AI Framework — Section VI: Educating Americans & Developing an AI-Ready Workforce</p>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {(["roster","assign","reports"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition ${
                tab === t ? "bg-purple-700 text-white" : "bg-white border text-gray-700 hover:border-purple-400"
              }`}>
              {t === "roster" ? "👥 Class Roster" : t === "assign" ? "📚 Assign Lessons" : "📊 Reports"}
            </button>
          ))}
        </div>

        {/* Roster Tab */}
        {tab === "roster" && (
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-purple-50 text-purple-800">
                <tr>
                  <th className="text-left px-4 py-3">Student</th>
                  <th className="text-left px-4 py-3">Age</th>
                  <th className="text-left px-4 py-3">Lessons Done</th>
                  <th className="text-left px-4 py-3">Last Lesson</th>
                  <th className="text-left px-4 py-3">Avg Score</th>
                </tr>
              </thead>
              <tbody>
                {SAMPLE_STUDENTS.map((s, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{s.name}</td>
                    <td className="px-4 py-3">{s.age}</td>
                    <td className="px-4 py-3">{s.completed} / 20</td>
                    <td className="px-4 py-3 text-gray-500">{s.lastLesson}</td>
                    <td className="px-4 py-3">
                      <span className={`font-bold ${
                        s.score >= 90 ? "text-green-600" : s.score >= 75 ? "text-yellow-600" : "text-red-500"
                      }`}>{s.score}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Assign Tab */}
        {tab === "assign" && (
          <div>
            <p className="text-sm text-gray-500 mb-4">Click a lesson to assign it to your class, or go to the full curriculum library.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {QUICK_ASSIGN.map((lesson, i) => (
                <div key={i} className="bg-white border rounded-2xl p-4 flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">{lesson.pillar} · {lesson.age}</div>
                    <div className="font-semibold text-sm">{lesson.title}</div>
                  </div>
                  <button className="ml-4 bg-purple-700 text-white text-xs px-3 py-2 rounded-lg hover:bg-purple-800">
                    Assign
                  </button>
                </div>
              ))}
            </div>
            <Link href="/curriculum" className="text-purple-700 text-sm underline">→ Browse all 20 lessons in the Curriculum Library</Link>
          </div>
        )}

        {/* Reports Tab */}
        {tab === "reports" && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border p-6 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-4">📊 Class Progress Summary</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-purple-50 rounded-xl p-4">
                  <div className="text-3xl font-bold text-purple-700">10</div>
                  <div className="text-xs text-gray-500 mt-1">Lessons Completed</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="text-3xl font-bold text-green-700">88%</div>
                  <div className="text-xs text-gray-500 mt-1">Average Quiz Score</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-3xl font-bold text-blue-700">4</div>
                  <div className="text-xs text-gray-500 mt-1">Active Students</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border p-6 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">📥 Export for Grant Reporting</h3>
              <p className="text-sm text-gray-500 mb-4">Download anonymized class data for federal and state AI education grant reports.</p>
              <button className="bg-gray-800 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-900">
                Download CSV Report
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
