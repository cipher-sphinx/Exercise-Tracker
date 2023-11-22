import React, { Component } from 'react';
import axios from 'axios';

export default class EditUser extends Component {
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
            active: false
        };
    }

    componentDidMount() {
        const userId = this.props.match.params.id;

        axios.get(`http://localhost:5000/users/${userId}`)
            .then(response => {
                if (response.data) {
                    this.setState({
                        name: response.data.name,
                        age: response.data.age,
                        email: response.data.email,
                        username: response.data.username,
                        password: response.data.password,
                        role: response.data.role,
                        active: response.data.active
                    });
                } else {
                    console.log("No data found for the user ID:", userId);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeRole(e) {
        this.setState({
            role: e.target.value
        });
    }

    onChangeActive(e) {
        this.setState({
            active: e.target.value
        });
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
        };

        console.log(user);

        axios.post(`http://localhost:5000/users/update/${this.props.match.params.id}`, user)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Edit User</h3>
                <form onSubmit={this.onSubmit}>
                    {/* Name */}
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

                    {/* Age */}
                    <div className="form-group">
                        <label>Age: </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeAge}
                        />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label>Email: </label>
                        <input
                            type="email"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>

                    {/* Username */}
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

                    {/* Password */}
                    <div className="form-group">
                        <label>Password: </label>
                        <input
                            type="password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>

                    {/* Role */}
                    <div className="form-group">
                        <label>Role: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.role}
                            onChange={this.onChangeRole}
                        />
                    </div>

                    {/* Active */}
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

                    <div className="form-group">
                        <input type="submit" value="Edit User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}
