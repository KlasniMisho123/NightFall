'use client'

import React, { useContext, useEffect, useState } from "react"


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [authTest, setAuthTest] = useState(false)
  const [isSideNavBarActive, setIsSideNavBarActive] = useState(false)
  const [selectedNavSection, setSelectedNavSection] = useState('')

  function handleSelectedNavSection(section) {
    setSelectedNavSection(section)
    setIsSideNavBarActive(false)
  }

  useEffect(()=>{
    setAuthTest(true)
  },[])

const value = {
    authTest,
    handleSelectedNavSection
}

return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
)

}