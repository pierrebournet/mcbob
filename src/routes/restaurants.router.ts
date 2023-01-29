import * as express from 'express';
import { RestaurantsControllers} from '../controllers/restaurants.controller';
import { Admin } from '../middleware/auth';
import { authenticateJWT } from '../middleware/auth';

export const restaurantsRouter = express.Router();

restaurantsRouter.post('/register',authenticateJWT, RestaurantsControllers.createRestaurants);
restaurantsRouter.get('/restaurants',authenticateJWT, RestaurantsControllers.getRestaurant);
restaurantsRouter.get('/restaurants/:id',authenticateJWT, RestaurantsControllers.getRestaurants);
restaurantsRouter.delete('/restaurants/:id',authenticateJWT, RestaurantsControllers.deleteRestaurants);
restaurantsRouter.put('/restaurants/:id',authenticateJWT, RestaurantsControllers.updateRestaurants);
