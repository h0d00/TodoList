import styles from'./App.module.css';
import TimeZone from './components/TimeZone'
import InputTodo from './components/InputTodo'
import TodoList from './components/TodoList';

function App() {
  return (
    <div className={styles.App}>
      <TimeZone />
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default App;
