const router = require('express').Router();
let User = require('../models/user.model.js');

// Fetch all users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new user
router.route('/add').post((req, res) => {
    const { name, age, email, username, password, role, active } = req.body;
    const newUser = new User({ name, age, email, username, password, role, active });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get a specific user by ID
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update a user by ID
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.name = req.body.name;
            user.age = req.body.age;
            user.email = req.body.email;
            user.username = req.body.username;
            user.password = req.body.password;
            user.role = req.body.role;
            user.active = req.body.active;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a user by ID
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;