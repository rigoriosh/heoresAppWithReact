import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Nabar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div>
                <Switch>                    
                    <Route component={HeroScreen} exact  path="/hero/:heroId"></Route>
                    <Route component={DcScreen} exact  path="/dc"></Route>
                    <Route component={MarvelScreen} exact path="/marvel"></Route>
                    <Redirect to='/marvel'/>
                </Switch>
            </div>
        </>
    )
}
