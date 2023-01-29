import { Restaurant } from "../entities/restaurants"

export class RestaurantsRepository {

async createRestaurant(city: string): Promise< Restaurant | undefined > {
    const restaurant = new Restaurant();
    restaurant.city = city;
    return await restaurant.save();

    if (restaurant) {
        return restaurant;
    }
    return undefined;
}

async getRestaurantById(id: number): Promise< Restaurant | undefined > {
    
        const restaurant = await Restaurant.findOne({ where: { id } });
        if (restaurant) {
            return restaurant;
        }
        return undefined;
    }

async getRestaurants(): Promise<Array<Restaurant>> {
    return await Restaurant.find();
}

async deleteRestaurant(id: number): Promise<boolean> {
    const restaurant = await Restaurant.findOne({ where: { id } });
    if (restaurant) {
        await restaurant.remove();
        return true;
    }
    return false;
}

async updateRestaurant(id: number, city: string): Promise<Restaurant | undefined> {
    const restaurant = await Restaurant.findOne({ where: { id } });
    if (restaurant) {
        restaurant.city = city;
        await restaurant.save();
        return restaurant;
    }
    return undefined;
}

}
