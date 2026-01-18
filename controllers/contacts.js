const rachelRoute = (req, res) => {
    res.send("Rachel Ray");
};
const maryRoute = (req, res) => {
    res.send("Mary J Ray");
};
module.exports = {
    rachelRoute,
    maryRoute
};


// // most of this was a prompt from vsCode Copilot
// const mongodb = require('../db/connection');
// const ObjectId = require('mongodb').ObjectId;

// module.exports = {
//     getAllContacts: async (req, res) => {
//         try {
//             const contacts = await mongodb.getDb().db().collection('contacts').find().toArray();
//             res.status(200).json(contacts);
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     },
//     getContactById: async (req, res) => {
//         try {
//             const contact = await mongodb.getDb().db().collection('contacts').findOne({ _id: ObjectId(req.params.id) });
//             if (!contact) {
//                 return res.status(404).json({ error: 'Contact not found' });
//             }
//             res.status(200).json(contact);
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     },
//     createContact: async (req, res) => {
//         try {
//             const newContact = req.body;
//             const result = await mongodb.getDb().db().collection('contacts').insertOne(newContact);
//             res.status(201).json(result.ops[0]);
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     },
//     updateContact: async (req, res) => {
//         try {
//             const updatedContact = req.body;
//             const result = await mongodb.getDb().db().collection('contacts').updateOne({ _id: ObjectId(req.params.id) }, { $set: updatedContact });
//             if (result.modifiedCount === 0) {
//                 return res.status(404).json({ error: 'Contact not found' });
//             }
//             res.status(200).json({ message: 'Contact updated successfully' });
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     },
//     deleteContact: async (req, res) => {
//         try {
//             const result = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: ObjectId(req.params.id) });
//             if (result.deletedCount === 0) {
//                 return res.status(404).json({ error: 'Contact not found' });
//             }
//             res.status(200).json({ message: 'Contact deleted successfully' });
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     }
// };
