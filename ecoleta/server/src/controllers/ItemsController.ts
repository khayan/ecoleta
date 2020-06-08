import { Request, Response } from 'express';
import knex from '../database/conection';

// retorna todos os pontos
class IntemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                img_url: `http://localhost:3333/uploads/${item.img}`,
            };
        });
        return response.json(serializedItems);
    }
}

export default IntemsController;