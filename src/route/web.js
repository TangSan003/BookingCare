import express from "express"
import homeController from "../controllers/homeController"
import userController from "../controllers/userController"

let router = express.Router() 


let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCrud);
    router.post('/port-crud', homeController.postCrud);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getUserById);
    router.post('/update-crud', homeController.updateUserById);
    router.get('/delete-user', homeController.deleteUserById);

    router.post("/api/login", userController.handleUserLogin);

    return app.use("/", router);
}

module.exports = initWebRoutes;