import React from 'react';
import Nav from '../components/Nav';
import Home from '../pages/Home';
import ListedBooks from '../pages/ListedBooks';
import PagesToRead from '../pages/PagesToRead';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Nav></Nav>
            </div>
            <Outlet>
                <Home></Home>
                <ListedBooks></ListedBooks>
                <PagesToRead></PagesToRead>
            </Outlet>

        </div>
    );
};

export default MainLayout;