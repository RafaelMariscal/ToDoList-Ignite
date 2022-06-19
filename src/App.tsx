import { ChangeEvent, FormEvent, useState } from 'react'
import style from './App.module.css'
import { Task } from './components/Task'
import { Input } from './components/Input'
import { CreateButton } from './components/CreateButton'


function App() {
  interface Tasks {
    id: string
    taskContent: string
    isTaskDone: boolean
  }
  const [tasks, setTasks] = useState<Tasks[]>([])
  const [taskCounter, setTaskCounter] = useState(tasks.length)
  const [inputValue, setInputValue] = useState('')

  function updateForm(event: FormEvent, inputValue: string) {
    event.preventDefault()
    setTasks([...tasks, { id: 'task' + tasks.length + Math.random(), taskContent: inputValue, isTaskDone: taskDoneState }])
    setTaskCounter(taskCounter + 1)
    setInputValue('')
  }

  const [taskDoneState, setTaskDoneState] = useState(false)

  function updateInputValue(event: ChangeEvent<HTMLInputElement>) {
    setTaskDoneState(false)
    setInputValue(event.target.value)
  }

  const [taskDoneCounter, setTaskDoneCounter] = useState(0)

  function handleTaskDoneState(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        setTaskDoneState(!task.isTaskDone)
        const newTaskState = {
          id: task.id,
          taskContent: task.taskContent,
          isTaskDone: taskDoneState
        }
        return task = newTaskState
      } else {
        return task
      }
    })
    setTasks(newTasks)

    let counter = 0
    newTasks.map(task => {
      task.isTaskDone == true ? ++counter : counter
    })
    setTaskDoneCounter(counter)
  }

  function handleDeleteTask(taskId: string) {
    const newTasks = tasks.filter(task => task.id === taskId ? console.log(task.id) : 'não foi')
    console.log(newTasks)
    setTasks(newTasks)
  }

  return (
    <>
      <header className={style.topLogo}>
        <img src="./src/assets/logo.svg" alt="Todo logo" />
      </header>

      <main className='mainContainer'>
        <form
          onSubmit={(event) => updateForm(event, inputValue)}
          className={style.newTaskInputBox}>
          <Input inputValue={inputValue} updateInputValue={updateInputValue} />
          <CreateButton />
        </form>

        <div className={style.taksInfo}>
          <p>Tarefas Criadas <span className={style.counter}>{taskCounter}</span></p>
          <p>Concluídas <span className={style.counter}>{taskDoneCounter} de {taskCounter}</span></p>
        </div>

        {
          tasks[0] !== undefined ? (tasks.map(task => {
            return (
              <Task
                key={task.id}
                id={task.id}
                taskContent={task.taskContent}
                isTaskDone={task.isTaskDone}
                handleTaskDoneState={handleTaskDoneState}
                handleDeleteTask={handleDeleteTask}
              />
            )
          })) : (
            <div className={style.tasksCardsContainer} >
              <div className={style.tasksCardsContainerEmpty}>
                <img src="./src/assets/clipboard.svg" alt="Clipboard icon" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          )
        }
      </main >
    </>
  )
}

export default App