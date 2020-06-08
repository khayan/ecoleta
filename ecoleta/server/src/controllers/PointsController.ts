import { Request, Response } from 'express';
import knex from '../database/conection';

class PointsController {
    
    // retorna todos os pontos cadastrados
    async index_all(request: Request, response: Response) {
        const points = await knex('points').select('*');
        return response.json(points);
    };
    
    // retorna um ponto pelo id
    async show(request: Request, response: Response) {
        const { id } = request.params; //desestruturação params = const
        const point = await knex('points').where('id', id).first();

        if(!point) {
            return response.status(400).json({ message: 'Point not found' });
        }

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title');

        return response.json({ point, items });
    };

    // retorna todos os pontos por query params
    async index(request: Request, response: Response) {
        const { city, uf, items } = request.query;
        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()));

        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*');

        return response.json(points);
    }

    // insere um novo ponto
    async create(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;
    
        const trx =  await knex.transaction();
    
        const point = {
            img: 'https://images.unsplash.com/photo-1540340061722-9293d5163008?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        };

        const insertedIds = await trx('points').insert(point);
    
        const point_id = insertedIds[0];
    
        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                point_id,
            };
        });
    
        await trx('point_items').insert(pointItems);
        
        await trx.commit();
        
        return response.json({
            id: point_id,
            ...point,
        });
    };

    // [ToDo]   atualiza um ponto
    async update(request: Request, response: Response) {
        const { id } = request.params;
        const point = await knex('point').where('id', id).first();

        if(!point) {
            return response.status(400).json({ message: `Point ${id} not found` });
        }
        
        const pointInfoUpdate = request.body;

        const updatedPoint = await knex('point').update(pointInfoUpdate).where('id', id);

        return response.json({ updatedPoint });
    }
};

export default PointsController;