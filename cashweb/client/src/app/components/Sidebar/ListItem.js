// REACT MODULES ==================================
import React from 'react';

const ListItem = () => {

    return (
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
};

export default ListItem;
