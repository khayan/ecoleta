import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const itemsController = new ItemsController();
const pointsController = new PointsController();

// Itens
routes.get('/items', itemsController.index);

// Locais
routes.get('/points/all', pointsController.index_all);
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);
routes.post('/points', pointsController.create);
// routes.put('/points/:id', pointsController.update); //TODO


export default routes;