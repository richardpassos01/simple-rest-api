const {
    Router
} = require('express');

const routes = Router();

const BranchController = require('./controllers/BranchController');
const controller = new BranchController();

routes.get('/branches', (req, res) => {
    controller.getBranches(req)
        .then(item => res.json(item))
        .catch(error => console.error(error));
});

module.exports = routes;