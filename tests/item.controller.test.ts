import { Request, Response } from "express";
import { getItems } from '../src/controllers/item.controller';
import { items } from '../src/models/item.model';

describe('Item Controller', () => {
    it('should run an empty array when not items exists', () => {
        // Create mock objects for Request, Response and NextFunction
        const req = {} as Request;
        const res = {
            json: jest.fn()
        } as unknown as Response;

        // Ensure that our in-memory store is empty
        items.length = 0;

        // Execute our controller function
        getItems(req, res, jest.fn());

        // Expect that res.json was called with an empty array
        expect(res.json).toHaveBeenCalledWith([]);
    });
});
