import React, { useEffect, useState } from 'react'
export const useOnline = () => {
    const [status, setStatus] = useState(true)
   console.log(status)
    useEffect(() => {
        const handleOnline = () => {
            setStatus(true)
        }
        const handleOffline = () => {
            setStatus(false)
        }
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)
        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])
    return status
}
