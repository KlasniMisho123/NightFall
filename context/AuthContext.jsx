'use client'

import React, { useContext } from "react"


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}