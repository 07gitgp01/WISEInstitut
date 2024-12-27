import mongoose from "mongoose";
import { RegisterSchema } from "../models/registerModel";

const Register = new mongoose.model('Register', RegisterSchema);

// ------------------------AJouter un register -----------------------------
export const addNewRegister = async (req, resp) => {
    try {
        const newRegister = new Register(req.body);
        const register = await newRegister.save();
        resp.status(200).json(register);
    }
    catch (err) {
        resp.status(500).json({message: 'Erreur lors de l\'ajout du register', error: err.message
        });
    }
}

// ------------------------Recup des registers -----------------------------
export const getRegisters = async (req, resp) => {
    try{
        const registers = await Register.find({});
        resp.status(200).json(registers);
    }
    catch(err){
        resp.status(500).json({message: 'Erreur lors de la recuperation des registers', error: err.message
        });
    }
}

// ------------------------Recup des registers -----------------------------
