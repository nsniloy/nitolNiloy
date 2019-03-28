const router = require('express').Router();
const adminController = require('./../controllers/adminController');

router.route('/pay')
    .post(adminController.pay)

router.route('/users')
    .get(adminController.allUser)

router.route('/user/info/:id')
    .get(adminController.userById)

router.route('/user/create')
    .post(adminController.createUser)

module.exports = router;
