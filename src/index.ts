import express from 'express';
import * as dotenv from 'dotenv';
import { JwtPayload } from 'jsonwebtoken';
import { Database } from  '../src/config/database';
import { userRouter }from './routes/user.router';
import { restaurantRouter } from '../src/routes/restaurant.router';
import { commandeRouter } from '../src/routes/commande.router';
import { menusRouter } from '../src/routes/menus.router';

declare global {
    namespace Express {
        interface Request {
        user?: JwtPayload;
        }
    }
}

dotenv.config({ path:'.env'});

Database.initialize().then(async()=>
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction)
{
    if (err instanceof SyntaxError) {
        res.status(400).send({ message: "Bad request" });
    } else {
        next();
    
    }
});

app.use('/api/user', useRouter);
app.use('/api/restaurant', restaurantRouter);
app.use('/api/commande', commandeRouter);
app.use('/api/menus', menusRouter);

app.use(function (req, res, next) {

    res.setHeader('authorization','');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});


}) 
