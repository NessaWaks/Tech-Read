import React, { use } from 'react'

const HomeView = () => {
  const counterValue = useSelector((state) => state.counter.value);
  return (
    <div className='container mt-5'>
      <h1 className="text-center text-3">Welcome to Home</h1>
    </div>
      
      

  )
}

export default HomeView