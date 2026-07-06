import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import toast from "react-hot-toast";

function QRGenerator() {
  const [text, setText] = useState("");

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");

    if (!canvas) {
      toast.error("Generate a QR Code first!");
      return;
    }

    const url = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.download = "QRCode.png";
    link.href = url;
    link.click();

    toast.success("QR Downloaded Successfully!");
  };

  const clearQR = () => {
    setText("");
    toast.success("Cleared");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 flex items-center justify-center p-6">

      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10">

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white">
            📱 QR Code Generator
          </h1>

          <p className="text-slate-300 mt-3 text-lg">
            Generate QR Codes instantly from text or URLs
          </p>
        </div>

        <input
          type="text"
          placeholder="Enter text or URL..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-slate-800 text-white p-4 rounded-xl border border-slate-700 outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <div className="flex justify-center mt-10">
          {text ? (
            <div className="bg-white p-6 rounded-2xl">
              <QRCodeCanvas
                value={text}
                size={220}
              />
            </div>
          ) : (
            <p className="text-slate-400">
              Enter text to generate QR Code
            </p>
          )}
        </div>

        <div className="flex justify-center gap-4 mt-8">

          <button
            onClick={downloadQR}
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl text-white font-semibold transition"
          >
            📥 Download QR
          </button>

          <button
            onClick={clearQR}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl text-white font-semibold transition"
          >
            🗑 Clear
          </button>

        </div>

      </div>

    </div>
  );
}

export default QRGenerator;