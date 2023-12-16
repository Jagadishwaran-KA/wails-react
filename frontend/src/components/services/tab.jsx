import React from 'react';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

const tab = () => {
  return (
    <div>
      <Tabs>
      <Tabs.Item active title="All" icon={HiUserCircle}>
      </Tabs.Item>
      <Tabs.Item title="Sent" icon={MdDashboard}>
    
      </Tabs.Item>
      <Tabs.Item title="Recieved" icon={HiAdjustments}>
       
      </Tabs.Item>
    </Tabs>
    </div>
  )
}

export default tab