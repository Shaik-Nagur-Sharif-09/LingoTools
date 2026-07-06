import { useState } from "react";
import { translateText } from "../services/translatorApi";
import { languages } from "../utils/languages";
import toast from "react-hot-toast";
function Translator() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("te");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
const [history, setHistory] = useState([]);
  const handleTranslate = async () => {
  if (!text.trim()) {
    toast.error("Please enter text");
    return;
  }

  setLoading(true);

  const data = await translateText(
    text,
    "en",
    language
  );

  if (data?.translation) {
    setResult(data.translation);

    setHistory((prev) => [
      {
        input: text,
        output: data.translation,
      },
      ...prev.slice(0, 4),
    ]);

    toast.success("Translated Successfully");
  } else {
    setResult("Translation failed");
    toast.error("Translation Failed");
  }

  setLoading(false);
};

  const copyResult = () => {
  navigator.clipboard.writeText(result);
  toast.success("Copied Successfully!");
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 flex items-center justify-center p-6">

      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white">
            🌍 AI Translator
          </h1>

          <p className="text-slate-300 mt-3 text-lg">
            Translate text into multiple languages instantly
          </p>
        </div>

        {/* Text Area */}
        <textarea
  rows="8"
  maxLength={500}
  value={text}
  onChange={(e) => setText(e.target.value)}
  placeholder="Type something to translate..."
  className="
    w-full
    bg-slate-800/80
    text-white
    placeholder-slate-400
    border
    border-slate-700
    rounded-2xl
    p-5
    text-lg
    focus:ring-4
    focus:ring-indigo-500/50
    outline-none
  "
/>

<div className="text-slate-400 text-sm mt-2">
  {text.length} / 500 Characters
</div>

        {/* Language Dropdown */}
        <div className="mt-5 flex flex-wrap gap-4 items-center">

          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
            className="
              bg-slate-800
              text-white
              px-4
              py-3
              rounded-xl
              border
              border-slate-700
              focus:outline-none
            "
          >
            {languages.map((lang) => (
              <option
                key={lang.code}
                value={lang.code}
              >
                {lang.name}
              </option>
            ))}
          </select>

          <button
            onClick={handleTranslate}
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
              shadow-lg
            "
          >
            🚀 Translate
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-6 text-cyan-300">
            Translating...
          </div>
        )}

        {/* Result Box */}
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
          <h3 className="text-cyan-400 font-semibold mb-3 text-xl">
            Translation Result
          </h3>

          <p className="text-white text-xl break-words">
            {result ||
              "Your translation will appear here..."}
          </p>
        </div>
        
<div className="mt-8">
  <h3 className="text-cyan-400 text-xl font-semibold mb-4">
    Translation History
  </h3>

  {history.length === 0 ? (
    <p className="text-slate-400">
      No translations yet
    </p>
  ) : (
    history.map((item, index) => (
      <div
        key={index}
        className="bg-slate-800 p-3 rounded-lg mb-3"
      >
        <p className="text-white">
          {item.input}
        </p>

        <p className="text-cyan-400">
          {item.output}
        </p>
      </div>
    ))
  )}
</div>
        {/* Copy Button */}
      <div className="flex flex-wrap gap-3 mt-4">

  {result && (
    <button
      onClick={copyResult}
      className="
        bg-emerald-600
        hover:bg-emerald-700
        transition
        text-white
        px-5
        py-3
        rounded-xl
        font-semibold
      "
    >
      📋 Copy Result
    </button>
  )}

  <button
    onClick={() => {
      setText("");
      setResult("");
      setHistory([]);
      toast.success("Cleared");
    }}
    className="
      bg-red-600
      hover:bg-red-700
      transition
      text-white
      px-5
      py-3
      rounded-xl
      font-semibold
    "
  >
    🗑 Clear
  </button>

</div>  
      </div>
    </div>
  );
}

export default Translator;