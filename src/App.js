import './App.css';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  const courseGoals = [
    { id: 'cg1', text: 'Finish the course' },
    { id: 'cg2', text: 'Learn all about the course main topics' },
    { id: 'cg3', text: 'Help Other students' },
  ];

  function addGoalHandler(newGoal) {
    courseGoals.push(newGoal);
    console.log("🪚 courseGoals:", courseGoals);
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addGoalHandler} />
      <GoalList goals={courseGoals} />
    </div >
  );
}

export default App;
