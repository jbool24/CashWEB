// REACT MODULES ==================================
import React from 'react';

// Import components ==============================


//=================================================

export default function EmailNav(props) {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="fa fa-envelope fa-fw"></i>
            </a>
            <ul className="dropdown-menu dropdown-messages">
                <li>
                    <a className="dropdown-item" href="#">
                        <div>
                            <strong>John Smith</strong>
                            <span className="pull-right text-muted">
                                <em>Yesterday</em>
                            </span>
                        </div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                    </a>
                </li>
                <li className="divider"></li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div>
                            <strong>John Smith</strong>
                            <span className="pull-right text-muted">
                                <em>Yesterday</em>
                            </span>
                        </div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                    </a>
                </li>
                <li className="divider"></li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div>
                            <strong>John Smith</strong>
                            <span className="pull-right text-muted">
                                <em>Yesterday</em>
                            </span>
                        </div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                    </a>
                </li>
                <li className="divider"></li>
                <li>
                    <a className="dropdown-item text-center" href="#">
                        <strong>Read All Messages</strong>
                        <i className="fa fa-angle-right ml-1"></i>
                    </a>
                </li>
            </ul>
        </li>
    );
}
