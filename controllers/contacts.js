const mongodb = require('../data/database');
const ObjectId = require( 'mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts').find({_id: contactsId });
    result.toArray().then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts[0]);
    });
}; 

const createcontacts = async (req, res) =>{
    const contacts = {
        firtstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    };
    const response = await mongodb.getDatabase().db().collection('contacts').replaceOne({_id: contactsId , contacts});
    if (resoponse.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'some error occurred while updating the contacts.');
    }
};


const updatecontacts = async (req, res) => {
    const contactsId = new ObjectId(req.params.id);
    const contacts = {
        firtstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    };
    const response = await mongodb.getDatabase().db().collection('contacts').replaceOne({ _id: contactsId, contacts });
    if (resoponse.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'some error occurred while updating the contacts.');
    }
};


const deletecontacts = async (req, res) => {
    const contactsId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('contacts').deleteOne({ _id: contactsId, });
    if (resoponse.deleteCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'some error occurred while updating the contacts.');
    }
};



module.exports = {
    getAll,
    getSingle,
    createcontacts,
    updatecontacts,
    deletecontacts
}