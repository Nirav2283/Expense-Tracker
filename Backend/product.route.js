import express from 'express';
import { addProduct, deleteById, editById, getById, getProduct ,deleteAll } from './product.controller.js';

const router = express.Router();

router.get('/' , getProduct);
router.get('/:id' , getById);
router.post('/' , addProduct);
router.patch('/:id' , editById);
router.delete('/:id' , deleteById);
router.delete('/' , deleteAll);

export default router;