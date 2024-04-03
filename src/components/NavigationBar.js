import React from "react";
import { Navigation, NavigationButton, NavigationLink } from './styles/ComponentStyles';
import { Outlet } from 'react-router-dom';

export const NavigationBar = () => {
    return (
        <>
            <Navigation>
                <NavigationButton>
                    <NavigationLink to='/form'>Create  Food</NavigationLink>
                </NavigationButton>
                <NavigationButton>
                    <NavigationLink to='/list'>Food List</NavigationLink>
                </NavigationButton>
            </Navigation>
            <Outlet />
        </>
    );
};