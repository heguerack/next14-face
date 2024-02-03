'use client'

import { createContext, useState, useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isMenuSidebarOpen, setMenuIsSidebarOpen] = useState(false)
  const [isBookingSidebarOpen, setIsBookingSidebarOpen] = useState(false)

  return (
    <AppContext.Provider
      value={{
        isMenuSidebarOpen,
        setMenuIsSidebarOpen,
        isBookingSidebarOpen,
        setIsBookingSidebarOpen,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlogalContext = () => {
  return useContext(AppContext)
}
