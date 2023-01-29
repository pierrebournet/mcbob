import { User } from "../entities/user";

export class UserRepository {
async createUser(name: string, hash: string): Promise< User | undefined > {
    const user = new User();
    user.name = name;
    user.password = hash;
    return await user.save();
};

async getUserByName(name: string): Promise< User | undefined > {
    return await User.findOne({ where: { name } });
};
}
    