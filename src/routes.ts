import { Router } from "express";
import { clientController } from "./useCases/Client";
import { orderController } from "./useCases/Order";
import { productController } from "./useCases/Product";

const router = Router()

router.get('/clients', (request, response) => {
    return clientController.select(request, response);
})

router.post('/clients', (request, response) => {
    return clientController.create(request, response);
})

router.get('/products', (request, response) => {
    return productController.select(request, response);
})

router.post('/products', (request, response) => {
    return productController.create(request, response);
})

router.get('/orders', (request, response) => {
    return orderController.select(request, response);
})

router.post('/orders', (request, response) => {
    return orderController.create(request, response);
})

export { router }