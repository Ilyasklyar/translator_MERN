import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { TranslatePage } from './pages/TranslatePage'
import { About } from './pages/About'
import { Vocabulary } from './pages/Vocabulary'

export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return(
            <Switch>
                <Route path='/' exact>
                    <TranslatePage />
                </Route>
                <Route path='/vocabulary'>
                    <Vocabulary />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Redirect to='/' />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path='/auth' exact>
                <AuthPage />
            </Route>
            <Redirect to='/auth' />
        </Switch>
    )
}