import { Link } from "react-router-dom";
import {
  FaLanguage,
  FaKey,
  FaQrcode,
  FaLock,
  FaStickyNote,
} from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">

        <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm">
          All-in-One Productivity Toolkit
        </span>

        <h1 className="text-6xl font-bold mt-8 leading-tight">
          Smart Tools
          <br />
          For Everyday Tasks
        </h1>

        <p className="text-slate-300 text-xl mt-6 max-w-3xl mx-auto">
          Translate text, generate secure strings, create QR codes,
          check password strength and manage notes — all in one place.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">

          <Link to="/translator">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-7 py-3 rounded-xl font-semibold">
              🌍 Translator
            </button>
          </Link>

          <Link to="/generator">
            <button className="bg-emerald-600 hover:bg-emerald-700 px-7 py-3 rounded-xl font-semibold">
              🔑 Generator
            </button>
          </Link>

          <Link to="/qr-generator">
            <button className="bg-cyan-600 hover:bg-cyan-700 px-7 py-3 rounded-xl font-semibold">
              📱 QR Generator
            </button>
          </Link>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 p-8 rounded-3xl hover:scale-105 duration-300">
            <FaLanguage className="text-5xl text-cyan-400 mb-5" />

            <h3 className="text-2xl font-semibold mb-3">
              Translator
            </h3>

            <p className="text-slate-300">
              Convert text into different languages quickly and easily.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl hover:scale-105 duration-300">
            <FaKey className="text-5xl text-green-400 mb-5" />

            <h3 className="text-2xl font-semibold mb-3">
              String Generator
            </h3>

            <p className="text-slate-300">
              Generate secure random strings for passwords, IDs and testing.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl hover:scale-105 duration-300">
            <FaQrcode className="text-5xl text-blue-400 mb-5" />

            <h3 className="text-2xl font-semibold mb-3">
              QR Generator
            </h3>

            <p className="text-slate-300">
              Create QR codes instantly from text or website links.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl hover:scale-105 duration-300">
            <FaLock className="text-5xl text-red-400 mb-5" />

            <h3 className="text-2xl font-semibold mb-3">
              Password Checker
            </h3>

            <p className="text-slate-300">
              Check password strength and improve account security.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl hover:scale-105 duration-300">
            <FaStickyNote className="text-5xl text-yellow-400 mb-5" />

            <h3 className="text-2xl font-semibold mb-3">
              Notes
            </h3>

            <p className="text-slate-300">
              Save important notes and access them anytime.
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 p-8 rounded-3xl">

            <h3 className="text-3xl font-bold mb-4">
              Everything in One Place
            </h3>

            <p className="text-slate-100">
              No need to switch between multiple websites. Access all
              essential productivity tools from one dashboard.
            </p>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-5xl font-bold text-cyan-400">5+</h2>
            <p className="mt-2 text-slate-300">Useful Tools</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-5xl font-bold text-cyan-400">15+</h2>
            <p className="mt-2 text-slate-300">Languages</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-5xl font-bold text-cyan-400">100%</h2>
            <p className="mt-2 text-slate-300">Responsive</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-5xl font-bold text-cyan-400">24/7</h2>
            <p className="mt-2 text-slate-300">Available</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl text-center p-12">

          <h2 className="text-4xl font-bold">
            Ready to Get Started?
          </h2>

          <p className="mt-5 text-lg">
            Explore all our tools and make your work easier.
          </p>

          <Link to="/translator">
            <button className="mt-8 bg-white text-slate-900 px-8 py-3 rounded-xl font-semibold hover:bg-slate-200">
              Explore Now
            </button>
          </Link>

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-8 text-center">

          <h2 className="text-2xl font-bold">
            LingoTools
          </h2>

          <p className="text-slate-400 mt-3">
            A collection of useful tools designed to simplify everyday tasks.
          </p>

          <p className="mt-5 text-sm text-slate-500">
            © 2026 LingoTools. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;