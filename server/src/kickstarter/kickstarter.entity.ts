import { 
  Entity,
  Column,
  PrimaryGeneratedColumn, 
  BaseEntity, 
  PrimaryColumn
} from "typeorm";

@Entity()
export class Kickstarter extends BaseEntity {
  @PrimaryColumn({ name: "ID", type: "int" })
  id: number;

  @Column({ name: "name", type: "varchar" })
  name: string;

  @Column({ name: "category", type: "varchar" })
  category: string;

  @Column({ name: "main_category", type: "varchar" })
  mainCategory: string;

  @Column({ name: "currency", type: "varchar" })
  currency: string;

  @Column({ name: "deadline" , type: "date" })
  deadline: Date;

  @Column({ name: "goal", type:"float" })
  goal: number;

  @Column({ name: "launched" , type: "date" })
  launched: Date;

  @Column({ name: "pledged", type:"float" })
  pledged: number;

  @Column({ name: "state", type: "varchar" })
  state: string;

  @Column({ name: "backers", type: "int" })
  backers: number;

  @Column({ name: "country", type: "varchar" })
  country: string;

  @Column({ name: "usd_pledged", type:"float" })
  usdPledged: number;

  @Column({ name: "usd_pledged_real", type:"float" })
  usdPledgedReal: number;

  @Column({ name: "usd_goal_real", type:"float" })
  usdGoalReal: number;

}