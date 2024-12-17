// import mongoose from 'mongoose';
// import { ContactSchema } from '../models/crmModel';

// const Contact = mongoose.model('Contact', ContactSchema);

// export const addNewContact = async (req, res) => {
//     let newContact = await new Contact(req.body);

//     newContact.save((err, contact) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(contact);
//     });
// };

// export const getContacts = async (req, res) => {
//     await Contact.find({}, (err, contact) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(contact);
//     });
// };

// export const getContactWithID = async (req, res) => {
//     await Contact.findById(req.params.contactId, (err, contact) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(contact);
//     });
// }

// export const updateContact = async (req, res) => {
//     await Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true }, (err, contact) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(contact);
//     })
// }

// export const deleteContact = async (req, res) => {
//     await Contact.remove({ _id: req.params.contactId }, (err, contact) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json({ message: 'Successfully deleted contact'});
//     })
// }

import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

// Ajout d'un nouveau contact
export const addNewContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const contact = await newContact.save();
        res.status(200).json(contact); // Retourne le contact créé avec un statut 201
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de l\'ajout du contact', error: err.message });
    }
};

// Récupérer tous les contacts
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({}); // Pas de callback, juste await
        res.status(200).json(contacts); // Retourne les contacts trouvés avec un statut 200
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des contacts', error: err.message });
    }
};

// Récupérer un contact par ID
export const getContactWithID = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.contactId); // Utilisation de await
        if (!contact) {
            return res.status(404).json({ message: 'Contact non trouvé' });
        }
        res.status(200).json(contact); // Retourne le contact avec le statut 200
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération du contact', error: err.message });
    }
};

// Mettre à jour un contact
export const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id: req.params.contactId },
            req.body,
            { new: true } // Retourner le document mis à jour
        );
        if (!contact) {
            return res.status(404).json({ message: 'Contact non trouvé pour la mise à jour' });
        }
        res.status(200).json(contact); // Retourne le contact mis à jour
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour du contact', error: err.message });
    }
};

// Supprimer un contact
export const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.deleteOne({ _id: req.params.contactId });
        if (contact.deletedCount === 0) {
            return res.status(404).json({ message: 'Contact non trouvé pour la suppression' });
        }
        res.status(200).json({ message: 'Contact supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression du contact', error: err.message });
    }
};