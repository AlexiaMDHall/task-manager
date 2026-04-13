'use client';

import Taskcard from './Taskcard';

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div>
      {tasks.map((task) => (
        <Taskcard
          key={task.id}
          id={task.id}
          title={task.title}
          done={task.done}
          onToggle={onToggle}   // ✅ explicitly forwarded
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

     
