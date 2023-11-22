import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to='/' className='navbar-brand'>Exercise Tracker</Link>
                <div className='collpase navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='navbar-item'>
                            <Link to='/' className='nav-link'>Exercises</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/users' className='nav-link'>Users</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/createexercise' className='nav-link'>Create Exercise Log</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/createuser' className='nav-link'>Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}