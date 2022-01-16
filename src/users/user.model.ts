import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model } from "sequelize-typescript";

@Table({ tableName: "USERS" })
export class User extends Model {

	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	@ApiProperty()
	id: number;

	@Column({ type: DataType.STRING, allowNull: false })
	@ApiProperty()
	name: string;

	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	@ApiProperty()
	email: string;

	@Column({ type: DataType.INTEGER, allowNull: false })
	@ApiProperty()
	phone: number;
}