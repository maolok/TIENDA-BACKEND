import { Router } from "express";
import { deleteProducts, getProduct, getProducts, createProducts, updateProducts } from '../controllers/products.js'
const router = Router();

router.get('/products', getProducts);
router.post('/products', createProducts);
router.put('/products/:id', updateProducts);
router.delete('/products/:id', deleteProducts);

router.get('/products/:id', getProduct);
//products/1

export default router;