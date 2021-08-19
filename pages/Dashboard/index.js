import React from 'react'
import Link from 'next/link'
import DashboardWrapper from './DashboardWrapper'
import { FormControlLabel, List, ListItem, Switch } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import {toggleMenu} from '../../redux/actions'
import { faHome, faImages, faNewspaper, faTasks, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-awesome-reveal'

const menus = [
    { id: "home", to: "/", title: "Home", icon: faHome },
    { id: "users", to: "/users", title: "Users", icon: faUsers },
    { id: "todos", to: "/todos", title: "Todos", icon: faTasks },
    { id: "albums", to: "/albums", title: "Albums", icon: faVideo },
    { id: "photos", to: "/photos", title: "Photos", icon: faImages },
    { id: "posts", to: "/posts", title: "Posts", icon: faNewspaper },
]

const Dashboard = ({ children, menu }) => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.isSidebarShow);

    return (
        <DashboardWrapper>
            <div className={`sidebar ${show && "show" || "hide"}`}>
                <h1 className="side-title">Sidebar</h1>
                <hr className="bg-white" />
                <List component="nav">
                    {menus.map((v, i) => <li key={i} >
                        <Slide delay={i * 100}>
                            <Link href={`${v.to}`}>
                                <a className={`${menu === v.id ? "active" : ""}`}>
                                <ListItem button >
                                    <FontAwesomeIcon icon={v.icon} className="me-2 icon" />
                                    <span className="dash-title">{v.title}</span>
                                </ListItem>
                                </a>
                            </Link>
                        </Slide>
                    </li>)}
                </List>
            </div>
            <div className="rightside">
                <header className="shadow">

                    <FormControlLabel
                        control={
                            <Switch
                                checked={!show}
                                onChange={() => toggleMenu(dispatch)}
                                color="primary"
                            />
                        }
                        label="Collapsed"
                    />

                    <img src="vercel.svg" className="logo" alt="" />
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </DashboardWrapper >
    )
}

export default Dashboard