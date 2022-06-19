import { Checkbox } from '../Checkbox'
import { DeleteButton } from '../DeleteButton'

import style from './styles.module.css'

interface Test {
  id: string
  taskContent: string
  isTaskDone: boolean
  handleTaskDoneState: (id: string) => void
  handleDeleteTask: (id: string) => void
}

export function Task({ id, taskContent, handleTaskDoneState, handleDeleteTask, isTaskDone }: Test) {
  return (
    <div className={style.taskCard}>
      <Checkbox id={id} handleTaskDoneState={handleTaskDoneState} />
      <p className={[style.taskContent, isTaskDone == true ? style.taskDone : ''].join(' ')}>{taskContent}</p>
      <DeleteButton id={id} handleDeleteTask={handleDeleteTask} />
    </div>
  )
}