const express = require('express');
const master_api_controller = require('../controllers/master_apis_controller.js');


router = express.Router();
// Client master apis
router.post('/client/add', master_api_controller.addClient);
router.get('/client/list', master_api_controller.getClients);

router.get('/client/:id', master_api_controller.getSingleClient);
router.put('/client/:id', master_api_controller.updateClientDetails);
router.delete('/client/:id', master_api_controller.deleteClient);

// Designation master apis
router.post('/designation/add', master_api_controller.addDesignation);
router.get('/designation/list', master_api_controller.getDesignations);

router.get('/designation/:id', master_api_controller.getSingleDesignation);
router.put('/designation/:id', master_api_controller.updateDesignationDetails);
router.delete('/designation/:id', master_api_controller.deleteDesignation);


module.exports = router;