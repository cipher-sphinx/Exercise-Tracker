const axios = require('axios');

// Fetch all exercises
axios.get('http://localhost:5000/exercises')
    .then(response => {
        console.log('All Exercises:', response.data);
    })
    .catch(error => {
        console.error('Error fetching exercises:', error);
    });

// Add a new exercise
axios.post('http://localhost:5000/exercises/add', {
    name: 'New Exercise',
    description: 'Exercise Description',
    duration: 30,
    date: new Date() // Replace with a valid date
})
    .then(response => {
        console.log('New Exercise Added:', response.data);
    })
    .catch(error => {
        console.error('Error adding exercise:', error);
    });

// Fetch a specific exercise by ID (replace :id with an actual exercise ID)
axios.get('http://localhost:5000/exercises/:id')
    .then(response => {
        console.log('Exercise by ID:', response.data);
    })
    .catch(error => {
        console.error('Error fetching exercise by ID:', error);
    });

// Update a specific exercise by ID (replace :id with an actual exercise ID)
axios.put('http://localhost:5000/exercises/:id', {
    name: 'Updated Exercise Name',
    description: 'Updated Exercise Description',
    duration: 60,
    date: new Date() // Update with a valid date
})
    .then(response => {
        console.log('Exercise Updated:', response.data);
    })
    .catch(error => {
        console.error('Error updating exercise:', error);
    });



// Delete a specific exercise by ID (replace :id with an actual exercise ID)
axios.delete('http://localhost:5000/exercises/:id')
    .then(response => {
        console.log('Exercise Deleted:', response.data);
    })
    .catch(error => {
        console.error('Error deleting exercise:', error);
    });
