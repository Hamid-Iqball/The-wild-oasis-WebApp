import React from 'react'
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm'

function Settings() {
  return (
    <div >
      <h1 className="text-4xl font-semibold text-orange-700 mb-10 mt-4">
        Update Hotel Settings
      </h1>
      <div >

      <UpdateSettingsForm/>
      </div>
    </div>
  )
}

export default Settings