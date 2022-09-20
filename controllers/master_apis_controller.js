const db = require('../models')

// Create  models
const clients = db.clients
const designations = db.designations

// ============================ Clients master contorllers ==================
// Add clients
const addClient = async (req, res) => {
    let req_data = {
        name: req.body.client_name,
        created_by: 1
    }
    const client = await clients.create(req_data);
    res.status(200).send(client);
}

// Get all clients
const getClients = async (req, res) => {
    // let clients_data = await clients.findAll({});
    let clients_data = await clients.findAll({
        attributes: [
            'id',
            'name'
        ],
        where: {
            is_deleted: false,
            is_active: true
        }
    });
    res.status(200).send(clients_data);
}

// Get single client
const getSingleClient = async (req, res) => {
    let id = req.params.id;
    let client_data = await clients.findOne({where: {id: id}});
    res.status(200).send(client_data);
}

// Update client details
const updateClientDetails = async (req, res) => {
    let id = req.params.id;
    let client_data = await clients.update(req.body, {where: {id: id}});
    res.status(200).send("Successfully updated");
}

// Delete client
const deleteClient = async (req, res) => {
    let id = req.params.id;
    await clients.destroy({where: {id: id}});
    res.status(200).send("Successfully deleted");
}


// ======================== Designation master controllers =====================
// Add designations
const addDesignation = async (req, res) => {
    let req_data = {
        designation_name: req.body.designation_name,
        created_by: 1
    }
    const designation = await designations.create(req_data);
    res.status(200).send(designation);
}

// Get all designations
const getDesignations = async (req, res) => {
    // let designations_data = await designations.findAll({});
    let designations_data = await designations.findAll({
        attributes: [
            'id',
            'designation_name'
        ],
        where: {
            is_deleted: false,
            is_active: true
        }
    });
    res.status(200).send(designations_data);
}

// Get single designation
const getSingleDesignation = async (req, res) => {
    let id = req.params.id;
    let designation_data = await designations.findOne({where: {id: id}});
    res.status(200).send(designation_data);
}

// Update designation details
const updateDesignationDetails = async (req, res) => {
    let id = req.params.id;
    let designation_data = await designations.update(req.body, {where: {id: id}});
    res.status(200).send("Successfully updated");
}

// Delete designation
const deleteDesignation = async (req, res) => {
    let id = req.params.id;
    await designations.destroy({where: {id: id}});
    res.status(200).send("Successfully deleted");
}


module.exports = {
    addClient,
    getClients,
    getSingleClient,
    updateClientDetails,
    deleteClient,
    addDesignation,
    getDesignations,
    getSingleDesignation,
    updateDesignationDetails,
    deleteDesignation
}