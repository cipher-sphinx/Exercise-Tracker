import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangeActive = this.onChangeActive.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            name: '',
            age: 0,
            email: '',
            username: '',
            password: '',
            role: '',
            active: false,
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangeRole(e) {
        this.setState({
            role: e.target.value
        })
    }

    onChangeActive(e) {
        this.setState({
            active: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            role: this.state.role,
            active: this.state.active
        }
    

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            age: 0,
            email: '',
            username: '',
            password: '',
            role: '',
            active: false
        });
    }


    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <br/>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  
                            type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            />
                    </div>
                    <br/>
                    <div className="form-group"> 
                        <label>Age: </label>
                        <input  
                            type="text"
                            required
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeAge}
                            />
                    </div>
                    <br/>
                    <div className="form-group"> 
                        <label>Email: </label>
                        <input  
                            type="text"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            />
                    </div>
                    <br/>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <input  
                            type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <br/>
                    <div className="form-group"> 
                        <label>Password: </label>
                        <input  
                            type="text"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            />
                    </div>
                    <br/>
                    <div className="form-group"> 
                        <label>Role: </label>
                        <input  
                            type="text"
                            required
                            className="form-control"
                            value={this.state.role}
                            onChange={this.onChangeRole}
                            />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>Active: </label>
                        <select
                            className="form-control"
                            value={this.state.active}
                            onChange={this.onChangeActive}
                        >
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}