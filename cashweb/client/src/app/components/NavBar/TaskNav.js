// REACT MODULES ==================================
import React from 'react';

// Import components ==============================


//=================================================

export default function TaskNav(props) {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="fa fa-tasks fa-fw"></i>
            </a>
            <ul className="dropdown-menu dropdown-tasks">
                <li>
                    <a href="#">
                        <div>
                            <p>
                                <strong>Task 1</strong>
                                <span className="pull-right text-muted">40% Complete</span>
                            </p>
                            <div className="progress progress-striped active">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
                                    <span className="sr-only">40% Complete (success)</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="divider"></li>
                <li>
                    <a href="#">
                        <div>
                            <p>
                                <strong>Task 2</strong>
                                <span className="pull-right text-muted">20% Complete</span>
                            </p>
                            <div className="progress progress-striped active">
                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
                                    <span className="sr-only">20% Complete</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="divider"></li>
                <li>
                    <a href="#">
                        <div>
                            <p>
                                <strong>Task 3</strong>
                                <span className="pull-right text-muted">60% Complete</span>
                            </p>
                            <div className="progress progress-striped active">
                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
                                    <span className="sr-only">60% Complete (warning)</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="divider"></li>
                <li>
                    <a href="#">
                        <div>
                            <p>
                                <strong>Task 4</strong>
                                <span className="pull-right text-muted">80% Complete</span>
                            </p>
                            <div className="progress progress-striped active">
                                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
                                    <span className="sr-only">80% Complete (danger)</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="divider"></li>
                <li>
                    <a className="text-center" href="#">
                        <strong>See All Tasks</strong>
                        <i className="fa fa-angle-right"></i>
                    </a>
                </li>
            </ul>
        </li>
    );
}
