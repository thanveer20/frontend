import React from 'react'
import Menu from './components/Menu'
import Content from './components/Content'
import Createproject from './components/Createproject'

const App = () => {
  return (
    <div className='flex bg-dimWhite w-full h-screen'>

      <div className='h-full w-[30%] bg-blue-900'>
        <Menu/>
      </div>
      <div className='h-full w-[70%]'>
        {/* <Content/> */}
        <Createproject/>
      </div>



    </div>
  )
}

export default App