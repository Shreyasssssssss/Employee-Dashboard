import React from 'react'
import Header from '../../other/Header'
import TaskListNumbers from '../../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashBoard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'  >
        <Header/>
        <TaskListNumbers/>
        <TaskList/>
        
      
    </div>
  )
}

export default EmployeeDashBoard
