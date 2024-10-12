import './NewGoal.css'
function NewGoal(props) {
  // ______________________________________________________________________
  function addGoalHandler(event) {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: 'My new Goal!',
    };

    props.onAddGoal(newGoal);

  }

  // ______________________________________________________________________
  return (
    <div className="new-goal">
      <form onSubmit={addGoalHandler}>
        <input type="text" />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  )
}

export default NewGoal
