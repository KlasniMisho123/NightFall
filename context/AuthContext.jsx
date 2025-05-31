'use client'

import React, { useContext, useEffect, useState } from "react"


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [authTest, setAuthTest] = useState(false)
  const [selectedNavSection, setSelectedNavSection] = useState('')

  useEffect(()=>{
    setAuthTest(true)
  },[])

const value = {
    authTest,
    setSelectedNavSection
}

return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
)

}