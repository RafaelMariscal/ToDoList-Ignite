import style from './styles.module.css'

interface DoneState {
  id: string
  handleTaskDoneState: (id: string) => void
}

export function Checkbox({ id, handleTaskDoneState }: DoneState) {


  return (
    <label onClick={() => handleTaskDoneState(id)}>
      <input
        className={style.checkboxDefault}
        type="checkbox"
        name='taskDone'
      />
      <span></span>
    </label >
  )
}