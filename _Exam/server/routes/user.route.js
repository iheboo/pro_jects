const UserController = require('../controllers/user.controllers');
const {authenticate} = require('../config/jwt.config');

module.exports = (app) => {
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.post('/api/logout', UserController.logout);
    // app.get('/users', authenticate, UserController.getAll);
    // app.get('/users/:id', authenticate, UserController.getById);
    // app.put('/users/:id', authenticate, UserController.update);
    // app.delete('/users/:id', authenticate, UserController.delete);
}
