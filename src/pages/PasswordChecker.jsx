import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] =
    useState("");

  const getStrength = () => {
    if (password.length < 6)
      return {
        text: "Weak",
        color: "text-red-400",
      };

    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      return {
        text: "Strong",
        color: "text-green-400",
      };
    }

    return {
      text: "Medium",
      color: "text-yellow-400",
    };
  };

  const strength = getStrength();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          🔒 Password Strength Checker
        </h1>

        <p className="text-slate-300 text-center mb-8">
          Check how secure your password is
        </p>

        <input
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          placeholder="Enter Password..."
          className="w-full bg-slate-800 text-white p-4 rounded-xl border border-slate-700"
        />

        {password && (
          <div className="mt-6 text-center">
            <h3 className="text-xl text-white">
              Password Strength
            </h3>

            <p
              className={`text-3xl font-bold mt-2 ${strength.color}`}
            >
              {strength.text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PasswordChecker;