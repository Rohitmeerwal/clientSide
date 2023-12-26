import  express  from "express";
import userController from "../controllers/userController.js";
import userCheck from "../middleware/auth_middleware.js";
const routes = express.Router();



// public routes
routes.post('/register', userController.register);
routes.post('/login', userController.login);
routes.post('/emailSendPasswordReset', userController.emailSendPasswordReset);
routes.post('/passwordRest/:id/:token', userController.passwordRest);

// private routes
routes.post('/changePassword',userCheck, userController.changePassword);
routes.get('/loggedUser',userCheck, userController.loggedUser);


export default routes;