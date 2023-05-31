import { Habit } from './components/Habit';

function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={3}></Habit>
      <Habit completed={3}></Habit>
      <Habit completed={1}></Habit>
      <Habit></Habit>
      <Habit></Habit>
      <Habit></Habit>
      <Habit></Habit>
      <Habit></Habit>
      <Habit completed={10}></Habit>
    </div>
  );
}

export default App;
