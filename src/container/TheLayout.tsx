import React from 'react'
import TheContent from './TheContent'
import TheHeader from './TheHeader'
const TheLayout = () => {
  return (
    <div>
        <TheHeader />
        <div>
            <TheContent />
        </div>
    </div>
  )
}

export default TheLayout