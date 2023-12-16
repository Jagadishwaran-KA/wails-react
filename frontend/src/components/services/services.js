import React from 'react'
import T from '../services/table'
import Tab from '../services/tab'
const services = () => {
  return (
    <div>
      <div className=' px-11 pt-20'><p className='text-3xl font-bold font-sans'>Services</p><br /><Tab /> <T /></div>
    </div>
  )
}

export default services
