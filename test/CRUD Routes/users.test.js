const axios = require('axios');

// Fetch all users
axios.get('http://localhost:5000/users')
    .then(response => {
        console.log('All Users:', response.data);
    })
    .catch(error => {
        console.error('Error fetching users:', error);
    });

// Add a new user
axios.post('http://localhost:5000/users/add', {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
    username: 'johndoe',
    password: 'password123',
    role: 'user',
    active: true
})
    .then(response => {
        console.log('New User Added:', response.data);
    })
    .catch(error => {
        console.error('Error adding user:', error);
    });

// Fetch a specific user by ID (replace :id with an actual user ID)
axios.get('http://localhost:5000/users/:id')
    .then(response => {
        console.log('User by ID:', response.data);
    })
    .catch(error => {
        console.error('Error fetching user by ID:', error);
    });

// Update a specific user by ID (replace :id with an actual user ID)
axios.put('http://localhost:5000/users/:id', {
    name: 'Updated Name',
    age: 35,
    // Other fields you want to update
})
    .then(response => {
        console.log('User Updated:', response.data);
    })
    .catch(error => {
        console.error('Error updating user:', error);
    });

// Delete a specific user by ID (replace :id with an actual user ID)
axios.delete('http://localhost:5000/users/:id')
    .then(response => {
        console.log('User Deleted:', response.data);
    })
    .catch(error => {
        console.error('Error deleting user:', error);
    });