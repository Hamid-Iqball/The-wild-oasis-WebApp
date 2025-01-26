import React from 'react'
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm'

function Settings() {
  return (
    <div >
      <h1 className="text-3xl font-[500] text-customOrange-800 ">
        Update Hotel Settings
      </h1>
      <div >

      <UpdateSettingsForm/>
      </div>
    </div>
  )
}

export default Settings