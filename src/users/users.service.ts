import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { User } from './user.model';

@Injectable()
export class UsersService {
	constructor(@InjectModel(User) private userModel: typeof User) { }

	async findAll(): Promise<User[]> {
		return this.userModel.findAll();
	}

	async findOne(id: number): Promise<User> {
		return this.userModel.findOne({
			where: {
				id,
			},
		});
	}

	async create(id: number): Promise<User> {
		await this.userModel.create({
			where: { id },
		});
		const user = this.findOne(id);
		return user;
	}

	async update(id: number, newUser: User): Promise<User> {
		await this.userModel.update(newUser, {
			where: { id },
		});
		const user = this.findOne(id);
		return user;
	}

	async destroy(id: number): Promise<User> {
		const user = this.findOne(id);
		this.userModel.destroy({
			where: { id },
		});
		return user;
	}

	async remove(id: number): Promise<void> {
		const user = await this.findOne(id);
		await user.destroy();
	}
}