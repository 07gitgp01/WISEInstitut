import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const RegisterSchema = new Schema ({
    firstName: {
        type: String,
        required: 'Entrer votre prénom'
    },
    lastName: {
        type: String,
        required: 'Entrer votre nom'
    },
    gender: {
        type: String
    },
    birthDate: {
        type: Date,
        default: Date.now
    },
    login: {
        type: String,
        required: 'Entrer un username'
    },
    password: {
        type: String,
        required: 'Entrer un mot de passe'
    },
    companyName: {
        type: String,
        required: 'Entrer le nom d evotre compagnie'
    }
})