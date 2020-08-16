import React from "react";
import { MenuItem } from "./menu-item.type";
import { Link } from "react-router-dom";
import './sidemenu.scss';

export default function SideMenu() {
    const menuItems: MenuItem[] = [
        {
            title: 'Neck',
            link: 'neck',
        },
        {
            title: 'Transposing',
            link: 'transposing',
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