import { 
    Entity,
    Column,
    PrimaryGeneratedColumn, 
    BaseEntity 
} from "typeorm";
@Entity('User')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "ID", type: "int" })
  id: number;

  @Column({ name: "first_name", type: "varchar" })
  firstName: string;

  @Column({ name: "last_name", type: "varchar" })
  lastName: string;

  @Column({ name: "is_active", type: "boolean", default: true })
  isActive: boolean;
}