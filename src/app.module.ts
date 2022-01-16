import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { User } from './users/user.model';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';


@Module({
	imports: [
		UsersModule,
		ConfigModule.forRoot({
			envFilePath: '.env',
		}),
		SequelizeModule.forRoot({
			dialect: 'mysql',
			host: process.env.MYSQL_HOST,
			port: Number(process.env.MYSQL_PORT),
			username: process.env.MYSQL_USER,
			password: process.env.MYSQL_PASSWORD,
			database: process.env.MYSQL_DB,
			models: [User],
			autoLoadModels: true,
			synchronize: true,
		}),
		UsersModule,
	],
	controllers: [UsersController],
	providers: [UsersService],
})
export class AppModule { }
