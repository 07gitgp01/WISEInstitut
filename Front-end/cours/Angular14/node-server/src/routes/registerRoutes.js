import { addNewRegister, getRegisters } from "../controllers/registerController";

const routes = (app) => {
    app.route('/register')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getRegisters)
    
    // POST endpoint
    .post(addNewRegister);

}

export default routes;