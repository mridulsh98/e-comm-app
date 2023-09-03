import React from "react"
import SearchBar from '../SearchBar/SearchBar'
import HomeButton from "../HomeButton/HomeButton"
import DynamicMenu from "../DynamicMenu/DynamicMenu"
import "./NavBar.scss"

const NavBar = () => {
    return (
        <div className="menu-wrapper">
            <HomeButton/>
            <DynamicMenu/>
            <SearchBar/>
        </div>
    )
}

export default NavBar