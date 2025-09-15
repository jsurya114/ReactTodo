import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(null);

  function addList() {
    if (task.trim() === "") return;

    if (edit !== null) {
      const update = items.map((item, i) => (i === edit ? task : item));
      setItems(update);
      setEdit(null);
    } else {
      setItems([...items, task]);
    }

    setTask("");
  }

  function deleteList(index) {
    const remove = items.filter((_, i) => i !== index);
    setItems(remove);
  }

  function editList(index) {
    setTask(items[index]);
    setEdit(index);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Todo List
        </h1>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={addList}
            className={`px-4 py-2 rounded-lg text-white transition ${
              edit !== null
                ? "bg-green-600 hover:bg-green-700"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {edit !== null ? "Update" : "Add"}
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet</p>
        ) : (
          <ol className="space-y-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm"
              >
                <span className="text-gray-800">{item}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => editList(index)}
                    className="px-2 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteList(index)}
                    className="px-2 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default Todo;
