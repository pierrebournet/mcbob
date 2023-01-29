import {Menus} from '../entities/menus'

export class MenuService {
    getMenu(id: string) {
        throw new Error("Method not implemented.");
    }
    createMenus(title: any) {
        throw new Error("Method not implemented.");
    }
    async addMenu(name: string, price: number): Promise<Menus | undefined> {
        const menu = new Menus();
        menu.name = name;
        menu.price = price;
        return await menu.save();

        if (menu) {
            return menu;
        }
        return undefined;
    }

    async getMenuById(): Promise<Menus | undefined> {

        const menu = await Menus.findOne({ where: { id } });
        if (menu) {
            return menu;
        }
        return undefined;
    }

    async getMenus(): Promise<Array<Menus>> {
        return await Menus.find();
    }

    async deleteMenu(id: number): Promise<boolean> {
        const menu = await Menus.findOne({ where: { id } });
        if (menu) {
            await menu.remove();
            return true;
        }
        return false;
    }

    async updateMenu(id: number, name: string, price: number): Promise<Menus | undefined> {
        const menu = await Menus.findOne({ where: { id } });
        if (menu) {
            menu.name = name;
            menu.price = price;
            await menu.save();
            return menu;
        }
        return undefined;
    }

}