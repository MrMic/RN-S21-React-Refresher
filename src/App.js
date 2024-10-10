import './App.css';
import GoalList from './components/GoalList';

function App() {
  const courseGoal = [
    { id: 'cg1', text: 'Finish the course' },
    { id: 'cg2', text: 'Learn all about the course main topics' },
    { id: 'cg3', text: 'Help Other students' },
  ];

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoal} />
    </div >
  );
}

export default App;
