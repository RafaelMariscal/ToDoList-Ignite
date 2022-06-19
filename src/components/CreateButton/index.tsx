import style from './styles.module.css'
import { PlusCircle } from 'phosphor-react'

export function CreateButton() {

  return (
    <>
      <button type='submit' className={style.createTaskButton}>
        Criar
        <PlusCircle size={20} color='var(--gray-100)' />
      </button>
    </>
  )
}