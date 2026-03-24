"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

const PILLARS = [
  { id: "learn",   label: "📖 Learn AI",   color: "bg-yellow-100 border-yellow-400 text-yellow-800" },
  { id: "use",     label: "🛠️ Use AI",     color: "bg-green-100 border-green-400 text-green-800" },
  { id: "create",  label: "⚙️ Create AI",  color: "bg-blue-100 border-blue-400 text-blue-800" },
  { id: "protect", label: "🛡️ Protect",    color: "bg-red-100 border-red-400 text-red-800" },
];

const LESSONS = [
  // LEARN AI
  { id:"l1",  pillar:"learn",   age:"5-8",   title:"Meet the Robots!",                     desc:"Friendly intro to AI using animals and toys.",           prompt:"Teach a 6-year-old what artificial intelligence is, using friendly animals and toys as examples. Include a short quiz and a fun drawing activity." },
  { id:"l2",  pillar:"learn",   age:"9-13",  title:"How Does AI Think?",                  desc:"How AI learns from data — dog recognition example.",     prompt:"Create an interactive lesson for a 12-year-old explaining how AI learns from data, using a dog-recognition example. Include a simulation and a quiz." },
  { id:"l3",  pillar:"learn",   age:"14-18", title:"AI, ML & Neural Networks",             desc:"Difference between AI, ML, and deep learning.",          prompt:"Teach a 16-year-old the difference between AI, machine learning, and neural networks. Include a roundtable debate: Is AI really intelligent? and a project activity." },
  { id:"l4",  pillar:"learn",   age:"19-64", title:"AI at Work: What You Need to Know",   desc:"How AI is changing jobs and how to adapt.",              prompt:"Create a 30-minute workplace AI literacy lesson for adults. Explain how AI is changing jobs, what automation means for workers, and how to use AI tools safely at work." },
  { id:"l5",  pillar:"learn",   age:"65plus",title:"Understanding AI in Everyday Life",   desc:"Voice assistants, Netflix, GPS — AI you already use.",  prompt:"Teach a senior citizen what AI is using examples from daily life — voice assistants, Netflix recommendations, GPS. Keep language simple. Include a quiz." },
  // USE AI
  { id:"u1",  pillar:"use",     age:"5-8",   title:"Ask the AI Helper",                   desc:"How to ask an AI assistant good questions.",             prompt:"Teach a 7-year-old how to ask an AI assistant good questions. Use simple examples like asking for a bedtime story or help with homework." },
  { id:"u2",  pillar:"use",     age:"9-13",  title:"AI for School: Tools, Tips & Rules",  desc:"Using AI for homework — and when NOT to use it.",       prompt:"Create a lesson for middle schoolers on using AI for homework, writing, and research — including rules about honesty, citation, and when NOT to use AI." },
  { id:"u3",  pillar:"use",     age:"14-18", title:"AI as Your Creative Partner",         desc:"Writing, coding, art, and music with AI.",               prompt:"Teach high school students how to use AI for writing, coding, art, and music — including how to evaluate AI outputs critically and cite AI assistance." },
  { id:"u4",  pillar:"use",     age:"19-64", title:"Using AI to Run Your Small Business", desc:"AI for marketing, customer service, and finance.",       prompt:"Create a hands-on lesson for small business owners on using AI tools for marketing, customer service, scheduling, and finance. Include a PBL activity." },
  { id:"u5",  pillar:"use",     age:"65plus",title:"Voice Assistants & AI Apps Safely",  desc:"How to use Alexa, Siri, and health apps safely.",       prompt:"Teach seniors how to use voice assistants (Alexa, Siri, Google) and health AI apps safely and confidently. Include a step-by-step simulation." },
  // CREATE AI
  { id:"c1",  pillar:"create",  age:"5-8",   title:"Train Your AI Pet!",                  desc:"Teach AI how to learn using a fun pet game.",            prompt:"Teach a 6-year-old how AI learns using a simple train your pet robot game analogy. Include a fun interactive activity where the student teaches an AI." },
  { id:"c2",  pillar:"create",  age:"9-13",  title:"Build a Simple AI Classifier",        desc:"Visual block-based coding to classify images.",          prompt:"Create a hands-on lesson for a 12-year-old on how to build a simple image classifier using visual block-based coding. Include a simulation." },
  { id:"c3",  pillar:"create",  age:"14-18", title:"Intro to ML & Python AI",             desc:"Build a handwriting-recognition AI in Python.",          prompt:"Teach a high schooler how to build a basic ML model in Python. Cover data collection, training, and testing. Include a project: Build an AI that recognizes handwriting." },
  { id:"c4",  pillar:"create",  age:"19-64", title:"No-Code AI: Build Your First AI Tool",desc:"Build a chatbot or classifier — no coding needed.",      prompt:"Teach an adult with no coding background how to build a no-code AI app (chatbot or classifier) using free tools. Include a PBL activity." },
  { id:"c5",  pillar:"create",  age:"65plus",title:"How People Build AI: Behind the Scenes",desc:"Human decisions behind AI — data, rules, and values.",prompt:"Explain to a senior how AI systems are designed and built, without any coding. Focus on the human decisions involved — what data is used, who decides the rules." },
  // PROTECT
  { id:"p1",  pillar:"protect", age:"5-8",   title:"Real or Pretend? Spotting Fakes",     desc:"How to tell if a photo or video is real.",               prompt:"Teach a 7-year-old how to tell if a photo or video is real or fake. Use simple examples. Include a quiz with real or fake picture questions." },
  { id:"p2",  pillar:"protect", age:"9-13",  title:"Deepfakes, Data & Digital Rights",    desc:"Privacy, deepfakes, and your rights online.",            prompt:"Create a lesson for a 12-year-old on deepfakes, data privacy, and their digital rights. Include a simulation: Spot the deepfake." },
  { id:"p3",  pillar:"protect", age:"14-18", title:"AI Ethics, Bias & Your Civil Rights", desc:"Bias, discrimination, and fair AI advocacy.",            prompt:"Teach a 16-year-old about AI bias, algorithmic discrimination, and how to advocate for fair AI. Include a roundtable debate and a case study." },
  { id:"p4",  pillar:"protect", age:"19-64", title:"AI Scams, Fraud & How to Fight Back", desc:"Voice cloning, phishing, and impersonation scams.",     prompt:"Create a workplace-focused lesson for adults on AI-enabled impersonation scams, voice cloning fraud, and phishing. Include real case examples and a quiz." },
  { id:"p5",  pillar:"protect", age:"65plus",title:"Protecting Yourself from AI Scams",   desc:"Robocalls, fake Medicare, and voice-clone fraud.",      prompt:"Teach seniors how to recognize and avoid AI-powered scams — robocalls, voice-clone fraud, fake Medicare calls, and phishing. Include a simulation and an action plan." },
];

const AGE_LABELS: Record<string,string> = {
  "5-8":"Ages 5–8", "9-13":"Ages 9–13", "14-18":"Ages 14–18", "19-64":"Ages 19–64", "65plus":"Ages 65+"
};

const PILLAR_COLORS: Record<string,string> = {
  learn:"bg-yellow-100 border-yellow-300",
  use:"bg-green-100 border-green-300",
  create:"bg-blue-100 border-blue-300",
  protect:"bg-red-100 border-red-300",
};

function CurriculumContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const ageParam = searchParams.get("age") || "all";
  const [selectedAge, setSelectedAge] = useState(ageParam);
  const [selectedPillar, setSelectedPillar] = useState("all");
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = LESSONS.filter(l =>
    (selectedAge === "all" || l.age === selectedAge) &&
    (selectedPillar === "all" || l.pillar === selectedPillar)
  );

  const copyPrompt = (id: string, prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-900">🇺🇸 AALN Curriculum Library</h1>
        <p className="text-sm text-gray-500">20 prebuilt AI lessons · Ages 5–120 · 4 pillars · Aligned to National AI Framework</p>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">AGE BAND</label>
            <div className="flex gap-2 flex-wrap">
              {["all","5-8","9-13","14-18","19-64","65plus"].map(a => (
                <button key={a}
                  onClick={() => setSelectedAge(a)}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    selectedAge === a ? "bg-blue-700 text-white border-blue-700" : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                  }`}>
                  {a === "all" ? "All Ages" : AGE_LABELS[a]}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">PILLAR</label>
            <div className="flex gap-2 flex-wrap">
              {["all",...PILLARS.map(p=>p.id)].map(p => (
                <button key={p}
                  onClick={() => setSelectedPillar(p)}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    selectedPillar === p ? "bg-blue-700 text-white border-blue-700" : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                  }`}>
                  {p === "all" ? "All Pillars" : PILLARS.find(pl=>pl.id===p)?.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Lesson Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(lesson => (
            <div key={lesson.id} className={`rounded-2xl border-2 p-5 shadow-sm ${PILLAR_COLORS[lesson.pillar]}`}>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold uppercase tracking-wide text-gray-500">
                  {PILLARS.find(p=>p.id===lesson.pillar)?.label} · {AGE_LABELS[lesson.age]}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1">{lesson.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{lesson.desc}</p>
              <div className="flex gap-2">
                <a
                  href={`/?prompt=${encodeURIComponent(lesson.prompt)}`}
                  className="flex-1 text-center bg-blue-700 text-white text-sm py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  🚀 Launch Classroom
                </a>
                <button
                  onClick={() => copyPrompt(lesson.id, lesson.prompt)}
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:border-blue-400 transition"
                  title="Copy prompt"
                >
                  {copied === lesson.id ? "✅" : "📋"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-2">🔍</p>
            <p>No lessons match your filters. Try a different age or pillar.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function CurriculumPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading curriculum...</div>}>
      <CurriculumContent />
    </Suspense>
  );
}
