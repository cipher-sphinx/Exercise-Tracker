import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.email}</td>
    <td>{props.user.role}</td>
    <td>{props.user.active ? 'Active' : 'Inactive'}</td>
    <td>
      <Link to={"/edituser/" + props.user._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteUser(props.user._id) }}>Delete</a>
    </td>
  </tr>
)

export default class UsersList extends Component {
    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this);

        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({ users: response.data})
                } else {
                    this.setState( { users: ["No users available"] })
                }    
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteUser(id) {
        axios.delete('http://localhost:5000/users/' + id)
            .then(res => console.log(res.data));
        
        this.setState({
            users: this.state.users.filter(user => user._id !== id)
        })
    }

    userList() {
        return this.state.users.map(currentUser => {
            return <User 
                        user={currentUser} 
                        deleteUser={this.deleteUser} 
                        key={currentUser._id}
                    />;
        })
    }

    render() {
        return (
            <div>
                <h3>User List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.userList() }
                    </tbody>
                </table>
            </div>
        );
    }
}
