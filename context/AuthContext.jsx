'use client'

import React, { useContext, useEffect, useState } from "react"


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [authTest, setAuthTest] = useState(false)

  useEffect(()=>{
    setAuthTest(true)
  },[])



const value = {
    authTest
}

return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
)

}