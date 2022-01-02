import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadUserStart } from '../redux/action';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUserStart())
    },[])
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
