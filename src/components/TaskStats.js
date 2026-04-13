// src/components/TaskStats.js
'use client';
export default function TaskStats({ total, completed, active, onClearCompleted }) {
  const total = active + completed;
    return (
    <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded">
      <div className="flex gap-4 text-sm text-gray-600">
        <span><span className="font-bold text-gray-900">{total}</span> total</span>
        <span><span className="font-bold text-gray-900">{active}</span> active</span>
        <span><span className="font-bold text-gray-900">{completed}</span> done</span>
      </div>
      <button
        onClick={onClearCompleted}
        disabled={completed === 0}
        className="text-xs text-red-500 hover:underline disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Clear completed
      </button>
    </div>
  );
}