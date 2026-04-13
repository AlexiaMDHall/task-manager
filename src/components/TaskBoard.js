// src/components/TaskBoard.js — 'use client' needed for interactivity
// ══════════════════════════════════════════════════════
// COMPONENT: TaskBoard  (the 'brain' of the app)
// PURPOSE:  Owns all task state. Passes data DOWN to child
//           components as props. Receives events UP from
//           children via callback props. This is 'lifting
//           state up' — the core React data-flow pattern.
// TYPE:     Client Component — needs useState + useEffect
// ══════════════════════════════════════════════════
'use client';

import { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskStats from './TaskStats';
import AddTaskForm from './AddTaskForm';

export default function TaskBoard() {
    const [filter, setFilter] = useState('all');  // 'all' | 'active' | 'completed'
    const [tasks, setTasks] =useState([]);

  // Load tasks from localStorage on initial render
  // Persist to localStorage ...

    useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      setTasks([
        { id: 't1', title: 'Buy milk',    done: false },
        { id: 't2', title: 'Write tests', done: false },
        { id: 't3', title: 'Ship it',     done: false },
      ]);
    }
  }, []);
   // Write to localStorage whenever tasks changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);         // dependency array — re-runs when tasks changes

  // Update browser tab title with active task count
  useEffect(() => {
    const active = tasks.filter((t) => !t.done).length;
    document.title = `${active} tasks remaining`;
    return () => { document.title = 'Task Manager'; }; // cleanup
  }, [tasks]);
  
  const completed = tasks.filter((t) => t.done).length;
  const active    = tasks.length - completed;
  const visible   =
    filter === 'all'       ? tasks :
    filter === 'completed' ? tasks.filter((t) => t.done) :
                             tasks.filter((t) => !t.done);

function handleToggle(id) {
    setTasks(tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  }
function handleDelete(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }
  function handleClearCompleted() {
  setTasks(tasks.filter((t) => !t.done));
}
  function handleAdd(title) {
    const newTask = {
      id: Date.now().toString(),  // simple unique ID based on timestamp              
      title,
      done: false
    };
    setTasks([...tasks, newTask]);
  }

// Single return at the end
  return (
    <div className="max-w-lg mx-auto p-6">
      <p className="text-sm text-gray-500 mb-4">
        {completed} of {tasks.length} complete
      </p>
      <AddTaskForm onAdd={handleAdd} />
      <TaskStats
        total={tasks.length}    
        active={active}
        completed={completed}
        onClearCompleted={handleClearCompleted}
        />
      <TaskList tasks={visible} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
} 






  