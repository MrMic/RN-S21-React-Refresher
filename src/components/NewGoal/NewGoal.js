import { useState } from 'react';
import './NewGoal.css'
function NewGoal(props) {
  const [enteredText, setEnteredText] = useState('');

  // ______________________________________________________________________
  function addGoalHandler(event) {
    event.preventDefault();

    if (enteredText.trim().length === 0) {
      return;
    }

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };

    setEnteredText('');

    props.onAddGoal(newGoal);

  }

  // ______________________________________________________________________
  function textChangeHandler(event) {
    setEnteredText(event.target.value);
  }

  // ______________________________________________________________________
  return (
    <div className="new-goal">
      <form onSubmit={addGoalHandler}>
        <input
          type="text"
          value={enteredText}
          onChange={textChangeHandler}
        />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  )
}

export default NewGoal
