import {
  useState,
  useCallback,
  useEffect,
} from "react";
import toast from "react-hot-toast";

function Generator() {
  const [randomString, setRandomString] =
    useState("");

  const [history, setHistory] = useState([]);

  const [length, setLength] = useState(12);

  const [type, setType] =
    useState("string");

  const generateString = useCallback(() => {
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    if (type === "password") {
      chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    }

    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(
        Math.floor(
          Math.random() * chars.length
        )
      );
    }

    setRandomString(result);

    setHistory((prev) => [
      result,
      ...prev.slice(0, 4),
    ]);

    toast.success("Generated Successfully");
  }, [length, type]);

  useEffect(() => {
    generateString();
  }, [generateString]);

  const copyString = () => {
    navigator.clipboard.writeText(
      randomString
    );

    toast.success("Copied Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 flex items-center justify-center p-6">

      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white">
            🔐 Random Generator
          </h1>

          <p className="text-slate-300 mt-3 text-lg">
            Generate secure strings and passwords
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-6">

          <select
            value={type}
            onChange={(e) =>
              setType(e.target.value)
            }
            className="
              bg-slate-800
              text-white
              px-4
              py-3
              rounded-xl
              border
              border-slate-700
            "
          >
            <option value="string">
              Random String
            </option>

            <option value="password">
              Password Generator
            </option>
          </select>

          <select
            value={length}
            onChange={(e) =>
              setLength(
                Number(e.target.value)
              )
            }
            className="
              bg-slate-800
              text-white
              px-4
              py-3
              rounded-xl
              border
              border-slate-700
            "
          >
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={16}>16</option>
            <option value={32}>32</option>
            <option value={64}>64</option>
          </select>

        </div>

        {/* Output */}
        <div
          className="
            bg-slate-800/80
            border
            border-slate-700
            rounded-2xl
            p-8
            text-center
          "
        >
          <h3 className="text-cyan-400 text-xl font-semibold mb-4">
            Generated Output
          </h3>

          <p
            className="
              text-white
              text-3xl
              font-mono
              break-all
            "
          >
            {randomString}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">

          <button
            onClick={generateString}
            className="
              bg-gradient-to-r
              from-emerald-500
              to-green-600
              hover:scale-105
              transition-all
              duration-300
              text-white
              px-8
              py-3
              rounded-xl
              font-semibold
            "
          >
            ⚡ Generate
          </button>

          <button
            onClick={copyString}
            className="
              bg-gradient-to-r
              from-indigo-600
              to-cyan-500
              hover:scale-105
              transition-all
              duration-300
              text-white
              px-8
              py-3
              rounded-xl
              font-semibold
            "
          >
            📋 Copy
          </button>

          <button
            onClick={() => {
              setHistory([]);
              toast.success(
                "History Cleared"
              );
            }}
            className="
              bg-red-600
              hover:bg-red-700
              transition
              text-white
              px-8
              py-3
              rounded-xl
              font-semibold
            "
          >
            🗑 Clear History
          </button>

        </div>

        {/* History */}
        <div
          className="
            mt-8
            bg-slate-800/80
            border
            border-slate-700
            rounded-2xl
            p-6
          "
        >
          <h3 className="text-cyan-400 text-xl font-semibold mb-4">
            Recent History
          </h3>

          {history.length === 0 ? (
            <p className="text-slate-400">
              No history available
            </p>
          ) : (
            <ul className="space-y-3">
              {history.map(
                (item, index) => (
                  <li
                    key={index}
                    className="
                      bg-slate-700/50
                      text-white
                      p-3
                      rounded-lg
                      font-mono
                      break-all
                    "
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}

export default Generator;