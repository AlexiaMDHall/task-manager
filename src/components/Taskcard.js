// COMPONENT: TaskCard
// PURPOSE:  Displays a single task item. Receives task data
//           from TaskList via props and fires callback events
//           back up to TaskBoard when the user interacts.
// TYPE:     Client Component ('use client') — needs onClick
// ════════════════════════════════════════════════
'use client';

export default function Taskcard({ title, done,id, onToggle, onDelete }) {
  return (
      // Tailwind classes for styling, with conditional classes based on 'done' status
      // Container div with flex layout, padding, border, and rounded corners   
      // Conditional background and border colors based on 'done' status
      // Task title with conditional styling: line-through and gray text if done, normal if not
    <div className={`flex items-center justify-between p-3 border-b rounded-lg 
      ${done ? 'bg-green-50 border-green-300' : 'bg-white border-gray-300'}`}>
    
      <span className={`text-lg font-semibold 
        ${done ? 'line-through text-gray-400' : 'text-gray-800'}`}>  
        {done ? '✓ ' : '○ '}{title}
      </span>

       <div className="flex gap-3 text-sm">
        <button
          className="text-green-700 hover:underline"
          onClick={() => onToggle(id)}
        >
          {done ? 'Undo' : 'Complete'}
        </button>
        <button
          className="text-red-500 hover:underline"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}