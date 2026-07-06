import { useState, useEffect } from "react";
import toast from "react-hot-toast";

function Notes() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes =
      JSON.parse(localStorage.getItem("notes")) || [];

    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = () => {
    if (!note.trim()) {
      toast.error("Enter a note");
      return;
    }

    setNotes([
      {
        id: Date.now(),
        text: note,
      },
      ...notes,
    ]);

    setNote("");
    toast.success("Note Added");
  };

  const deleteNote = (id) => {
    setNotes(
      notes.filter(
        (item) => item.id !== id
      )
    );

    toast.success("Note Deleted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          📝 Notes App
        </h1>

        <p className="text-slate-300 text-center mb-8">
          Save important notes locally
        </p>

        <div className="flex gap-4 mb-8">
          <input
            type="text"
            value={note}
            onChange={(e) =>
              setNote(e.target.value)
            }
            placeholder="Write a note..."
            className="flex-1 bg-slate-800 text-white p-4 rounded-xl border border-slate-700"
          />

          <button
            onClick={addNote}
            className="bg-indigo-600 hover:bg-indigo-700 px-6 rounded-xl text-white font-semibold"
          >
            Add
          </button>
        </div>

        <div className="space-y-4">
          {notes.length === 0 ? (
            <p className="text-slate-400">
              No notes available
            </p>
          ) : (
            notes.map((item) => (
              <div
                key={item.id}
                className="bg-slate-800 p-4 rounded-xl flex justify-between items-center"
              >
                <p className="text-white">
                  {item.text}
                </p>

                <button
                  onClick={() =>
                    deleteNote(item.id)
                  }
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Notes;