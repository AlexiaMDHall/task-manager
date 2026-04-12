'use client';

export default function Taskcard({ title, done }) {
  return (
    <div className={`p-4 border rounded-lg ${done ? 'bg-green-50 border-green-300' : 'bg-white border-gray-300'}`}>
      <h3 className={`text-lg font-semibold ${done ? 'line-through text-gray-500' : 'text-gray-800'}`}>
        {title}
      </h3>
      <div className="mt-2 text-sm font-medium">
        <span className={done ? 'text-green-600' : 'text-orange-600'}>
          {done ? '✓ Done' : '○ Pending'}
        </span>
      </div>
    </div>
  );
}

// src/components/TaskCard.js — receives data AND callback

export function TaskCard({ title, done, id, onToggle }) {
  return (
    <div className="flex items-center justify-between p-3 border-b">
      <span className={done ? 'line-through text-gray-400' : ''}>
        {title}
      </span>
      <button
        className="text-sm text-green-700 hover:underline"
        onClick={() => onToggle(id)}
      >Toggle</button>
    </div>
  );
}