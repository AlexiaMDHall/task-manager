'use client';

import Taskcard from './Taskcard';

export default function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return <p className="text-gray-500 text-center py-8">No tasks yet.</p>;
  }

  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <Taskcard key={task.id} title={task.title} done={task.done} onToggle={onToggle} onDelete={onDelete}/>
      ))}
    </div>
  );
}
     
