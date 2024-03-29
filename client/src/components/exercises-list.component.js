import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// two components
// Exercise component = functional react component ( accept prop and return jsx)
// ExercisesList = class component (state & life cycle methods)
const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date ? props.exercise.date.substring(0, 10) : ''}</td>
    <td>
      <Link to={"/editexercise/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {exercises: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({ exercises: response.data})
                } else {
                    this.setState( { exercises: ["No exercises available"] })
                }    
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteExercise(id) {
        // delete from database
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => console.log(res.data));
        
        // delete from current display
        this.setState({
            exercises: this.state.exercises.filter(element => element._id !== id)
        })
    }

    exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise 
                exercise={currentexercise} 
                deleteExercise={this.deleteExercise} 
                key={currentexercise._id}
            />;
    })
  }

    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.exerciseList() }
                </tbody>
                </table>
            </div>
        );
    }
}