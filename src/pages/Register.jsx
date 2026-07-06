import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Create Account
        </h1>

        <p className="text-slate-300 text-center mb-8">
          Join LingoTools today
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-4 mb-4 bg-slate-800 text-white rounded-xl border border-slate-700"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 mb-4 bg-slate-800 text-white rounded-xl border border-slate-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-4 bg-slate-800 text-white rounded-xl border border-slate-700"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-4 mb-6 bg-slate-800 text-white rounded-xl border border-slate-700"
        />

        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold">
          Register
        </button>

        <p className="text-center text-slate-300 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;