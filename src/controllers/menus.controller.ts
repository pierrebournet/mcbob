import { MenuService } from "../repository/menus.repository";
import { Request, Response } from "express";

const menuService = new MenuService();

export default class MenuController {


    async getMenus(req: Request, res: Response) {
        const menus = await menuService.getMenus();
        return res.send(menus);
    }

    async createMenu(req: Request, res: Response) {
        const { title } = req.body;
        const menus = await menuService.createMenus(title);
        return res.send(menus);
    }

    async getMenu(req: Request, res: Response) {
        const { id } = req.params;
        const menus = await menuService.getMenu(id);
        if (!menus) res.status(404).send({ message: "No post found" });
        return res.send(menus);
    }
}