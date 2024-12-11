import React, { useEffect } from 'react'
import { useUser } from '../../ViewModal/Hooks/AuthenticationsHooks/useUser'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const navigate = useNavigate()
    // 1. First we have to load the authenticated users.
    const {isLoading, isAuthenticated} = useUser()

    //2. If there is no authenticated  users then redirect to the login page.( We cannot call hook conditionally that is why we are calling useEffect before isLoading condition, try it that way you will find out)
    useEffect(function(){
        if(!isAuthenticated && !isLoading) navigate('/login')
        },[isAuthenticated ,isLoading, navigate])
    
    
    //3. While loading , show a spinner.
    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'>
            <Spinner/>
        </div> 
    }

    //4. If there is user then render the app.
    if (isAuthenticated) return children
}

export default ProtectedRoute