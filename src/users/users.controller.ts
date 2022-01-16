import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {

	constructor(private readonly userService: UsersService) { }

	@Get()
	findAll(): Promise<User[]> {
		return this.userService.findAll();
	}
	@Get(':id')
	@ApiParam({ name: 'FIND ID' })
	findOne(@Param() params): Promise<User> {
		return this.userService.findOne(params.id);
	}

	@Post(':id')
	@ApiParam({ name: 'CREATE' })
	create(@Body() user): Promise<User> {
		return this.userService.create(user);
	}

	@Put(':id')
	@ApiParam({ name: 'CHANGE' })
	update(@Body() user, @Param() params): Promise<User> {
		return this.userService.update(user, params.id);
	}

	@Delete(':id')
	@ApiParam({ name: 'DELETE' })
	destroy(@Param() params): Promise<User> {
		return this.userService.destroy(params.id);
	}
}