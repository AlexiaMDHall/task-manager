'use client';

import Taskcard from './Taskcard';

export default function TaskList({ tasks,onToggle }) {
  if (!tasks || tasks.length === 0) {
    return <p className="text-gray-500 text-center py-8">No tasks yet.</p>;
  }

  return (
   <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          done={task.done}
          onToggle={onToggle}   // pass it down
        />
      ))}
    </div>
  );
}

     
