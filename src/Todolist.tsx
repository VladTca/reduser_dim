import { FilterValuesType, TaskType } from "./App"; // Убедитесь, что App.ts экспортирует эти типы
import { ChangeEvent, KeyboardEvent, useState } from "react"; // Импортируйте необходимые хуки из 'react'
import { Button } from "./Button"; // Убедитесь, что Button существует и экспортируется правильно

type PropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (taskId: string) => void;
  changeFilter: (filter: FilterValuesType) => void;
  addTask: (title: string) => void;
};

export const Todolist = ({
  title,
  tasks,
  removeTask,
  changeFilter,
  addTask,
}: PropsType) => {
  const [taskTitle, setTaskTitle] = useState("");

  const addTaskHandler = () => {
    if (taskTitle.trim() !== "") {
      addTask(taskTitle.trim());
      setTaskTitle("");
    }
  };

  const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.currentTarget.value);
  };

  const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTaskHandler();
    }
  };

  const changeFilterTasksHandler = (filter: FilterValuesType) => {
    changeFilter(filter);
  };

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          value={taskTitle}
          onChange={changeTaskTitleHandler}
          onKeyUp={addTaskOnKeyUpHandler}
          placeholder="Введите задачу..."
        />
        <Button onClick={addTaskHandler}>+</Button>
      </div>
      {tasks.length === 0 ? (
        <p>Задач нет</p>
      ) : (
        <ul>
          {tasks.map((task) => {
            const removeTaskHandler = () => {
              removeTask(task.id);
            };

            return (
              <li key={task.id}>
                <input type="checkbox" checked={task.isDone} readOnly />
                <span>{task.title}</span>
                <Button onClick={removeTaskHandler}>x</Button>
              </li>
            );
          })}
        </ul>
      )}
      <div>
        <Button onClick={() => changeFilterTasksHandler("all")}>All</Button>
        <Button onClick={() => changeFilterTasksHandler("active")}>
          Active
        </Button>
        <Button onClick={() => changeFilterTasksHandler("completed")}>
          Completed
        </Button>
      </div>
    </div>
  );
};
