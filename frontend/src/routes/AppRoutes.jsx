import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/main/Home';
import Login from '../pages/main/Login';
import Signup from '../pages/main/Signup';
import Profile from '../pages/user/Profile';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/'>
                <Route path='/home' Component={Home} />
                <Route path='/login' Component={Login} />
                <Route path='/signup' Component={Signup} />
            </Route>
            <Route path='user'>
                <Route path='/profile' Component={Profile} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;