import { RestaurantsRepository } from "../repository/restaurants.repository";
import { Request, Response } from "express";

const restaurantsRepository = new RestaurantsRepository();

export default class RestaurantsController {

    async getRestaurant(req: Request, res: Response) {
        const restaurants = await restaurantsRepository.getRestaurants();
        return res.send(restaurants);
    }

    async createRestaurants(req: Request, res: Response) {
        const { name, location, price_range } = req.body;
        const restaurants = await restaurantsRepository.createRestaurant(name, location, price_range);
        return res.send(restaurants);
    }

    async getRestaurants(req: Request, res: Response) {
        const { id } = req.params;
        const restaurants = await restaurantsRepository.getRestaurants(id);
        if (!restaurants) res.status(404).send({ message: "No post found" });
        return res.send(restaurants);
    }
}