// REACT MODULES ==================================
import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';


const ListItem = () => (
    <h1></h1>
);

const SearchItem = () => (
    <li className="nav-item sidebar-search p-2">
        <div className="input-group custom-search-form">
            <input
                className="form-control px-1"
                type="text"
                placeholder="Search..."
            />
            <span className="input-group-btn">
                <button className="btn btn-default" type="button">
                    <i className="fa fa-search"></i>
                </button>
            </span>
        </div>
    </li>
);

const MenuItem = (props) => (
    <li className="nav-item p-2">
        <NavLink to={props.to} className='nav-link'>
            { props.icon && <i className={`fa fa-${props.icon} fa-fw p-1`}></i> }
            { props.name }
        </NavLink>
    </li>
);

const MenuWithSubItem = (props) => (
    <li className="nav-item p-2">
        <NavLink to={props.to} className='nav-link'>
            { props.icon && <i className={`fa fa-${props.icon} fa-fw p-1`}></i> }
            { props.name }
            <span className="fa arrow"></span>
        </NavLink>
        <ul className="nav nav-second-level">
            {props.children}
        </ul>
    </li>
);

MenuItem.protoTypes = {
    to: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string
};

export { ListItem, SearchItem, MenuItem, MenuWithSubItem };
