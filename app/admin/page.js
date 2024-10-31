import React from 'react'
import { AdminAccessProtectionServer } from '../_components/RoleAccessProtection'

function page() {
  return (
    <AdminAccessProtectionServer>
      <div>
        This is the admin dashboard
        <p> the control panel of the admin to control requests </p>
      
      </div>
    </AdminAccessProtectionServer>
  )
}

export default page
