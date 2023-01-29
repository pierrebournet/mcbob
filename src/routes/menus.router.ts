import * as express from 'express';
import { MenusControllers} from '../controllers/menus.controller';
import { Admin } from '../middleware/auth';

export const menusRouter = express.Router();

const menusControllers = new MenusControllers();

menusRouter.post('/register', Admin, menusControllers.createMenus);
menusRouter.get('/menus', menusControllers.getMenus);
menusRouter.get('/menus/:id', menusControllers.getMenu);
menusRouter.delete('/menus/:id', Admin, menusControllers.deleteMenus);
menusRouter.put('/menus/:id', Admin, menusControllers.updateMenus);