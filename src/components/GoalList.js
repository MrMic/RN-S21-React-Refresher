import './GoalList.css';


function GoalList(props) {
  console.log("🪚 props:", props);
  return (
    <ul className="goal-list">
      <li>Finish the course</li>
      <li>Learn all about the course main topics</li>
      <li>Help Other students</li>
    </ul>
  )

}

export default GoalList
