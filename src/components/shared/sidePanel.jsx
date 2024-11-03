import React from 'react'

const SidePanel = ({ children }) => {
  return (
    <div className='w-full h-full flex'>
      {/* TODO: define side panel width */}
      <div className=''>Este es mi SidePanel</div>
      {children}
    </div>
  )
}

export default SidePanel;
