import React from 'react'

const SidePanel = ({ children }) => {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <div>Este es mi SidePanel</div>
      {children}
    </div>
  )
}

export default SidePanel;
