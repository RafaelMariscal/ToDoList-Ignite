import style from './styles.module.css'

interface InputType {
  inputValue: string
  updateInputValue: (obj: any) => void
}

export function Input({ inputValue, updateInputValue }: InputType) {

  return (
    <>
      <input
        onChange={(event) => updateInputValue(event)}
        className={style.AddTasksInput}
        name="NewTaskInput"
        type="text"
        value={inputValue}
        required
        placeholder='Adicione uma nova tarefa'
      />
    </>
  )
}