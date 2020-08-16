import React from "react";
import { MenuItem } from "./menu-item.type";
import { Link } from "react-router-dom";
import './sidemenu.scss';
import routes from "../../consts/routes";

export default function SideMenu() {
    const menuItems: MenuItem[] = [
        {
            title: 'Neck',
            link: routes.neck
        },
        {
            title: 'Transposing',
            link: routes.transposing
        },
    ];
    return (
        <div className='side-menu'>
            {menuItems.map((item, i) => (
                <Link key={i} className='nav-item' to={item.link}>
                    <span className='nav-item-title'>{item.title}</span>
                </Link>
            ))}
        </div>
    )
}