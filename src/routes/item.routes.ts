import { Router } from "express";

import {
    createItem,
    getItemById,
    getItems,
    updateItem,
    deleteItem
} from '../controllers/item.controller';

const router = Router();

router.get('/', getItems);
router.get('/:id', getItemById);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;