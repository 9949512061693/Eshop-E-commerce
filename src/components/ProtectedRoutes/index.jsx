import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LoginContext } from '../../Context/LoginContext'

function ProtectedRoutes({ children }) {
    const { islogin } = useContext(LoginContext)

    if (!islogin) {
        return <Navigate to='/login' replace />
    }

    return children
}

export default ProtectedRoutes