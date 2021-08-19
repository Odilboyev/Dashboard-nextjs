import React from 'react'
import { useParams } from 'react-router-dom';
import Dashboard from '../../containers/Dashboard';
import Albums from '../Albums';
import Home from '../Home';
import Photos from '../Photos';
import Posts from '../Posts';
import Todos from '../Todos';
import Users from '../Users';

const Dashboards = () => {
    const { menu } = useParams();
    console.log("menu", menu);

    return (
        <Dashboard>
            {menu === "home" && <Home /> || ""}
            {menu === "todos" && <Todos /> || ""}
            {menu === "users" && <Users /> || ""}
            {menu === "albums" && <Albums /> || ""}
            {menu === "posts" && <Posts /> || ""}
            {menu === "photos" && <Photos /> || ""}
        </Dashboard>
    )
}

export default Dashboards;