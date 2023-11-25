import React from 'react'
import { useState } from 'react';

const TaskMap2 = () => {

  const [allTasks, setAllTasks] = useState([]);
  const [newTask, setNewTask] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleInputChange = () => {
    
    setAllTasks([...allTasks, newTask])
  }

  const salvarInfo = (e) => {
    setNewTask(e.target.previousElementSibling.value)
  }

  const deleteItem = (index) => {
    const updatedTasks = [...allTasks];
    updatedTasks.splice(index,1);
    setAllTasks(updatedTasks)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button onClick={salvarInfo} className='saveButton'>SALVAR</button>
        <button onClick={handleInputChange}>ENVIAR</button>
      </form>

      <div className='listaDeTarefas'>
        {allTasks.map((allTask, index) => (
          <div className='divTarefas'>
              <li key={index}> {allTask} <div className='divBotao'> <button className='deleteButton' onClick={() => deleteItem(index)}>❌</button> </div></li>
          </div>
        ))}
      </div>


    </div>
  )
}

export default TaskMap2