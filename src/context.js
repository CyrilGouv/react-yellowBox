import React, { useState, useContext } from "react"


const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <AppContext.Provider
            value={{
                isMenuOpen,
                handleMenu,
                isModalOpen,
                openModal,
                closeModal
            }}
        >
            { children }
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }