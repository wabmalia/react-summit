import React, { createContext, useContext, useState } from "react"

const UserContext = createContext()

export const useUserContext = () => {
    return useContext(UserContext)
}

const UserManager = ({ children }) => {
    const [user, setUser] = useState({})

    return (
        <UserContext.Provider value={
            {
                user,
                setUser: (user) => setUser(user)
            }
        }>
            {children}
        </UserContext.Provider >
    )
}
export default UserManager