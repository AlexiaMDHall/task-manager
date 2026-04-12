import Taskcard from '@/components/Taskcard';

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <Taskcard title="Buy milk" done={false} />
      <Taskcard title="Write tests" done={true} />
      <Taskcard title="Ship it" done={false} />
    </main>
  );
}
// Three patterns — choose the right one for context

// 3. Early return — complex logic or guards
export  function TaskCard({ task }) {
  if (!task) return null;
  if (task.archived) return <ArchivedBadge />;
  return <div className="p-2">{task.title}</div>;
}
