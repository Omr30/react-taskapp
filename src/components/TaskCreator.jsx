import {useState} from 'react'


const TaskCreator = () => {

    const [newTaskName, setNewTaskName] = useState()

    const handleSubmit = (e) => {
      e.preventDefault()
      localStorage.setItem('tasks', newTaskName)
      setNewTaskName('')
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Enter a new task' 
          onChange={(e) => setNewTaskName(e.target.value)} 
          value={newTaskName}
        />
        <button>Save Task</button>
      </form>
    </>
  )
}

export default TaskCreator