import { 
  Entity,
  Column,
  BaseEntity, 
  PrimaryColumn
} from "typeorm";

@Entity('Kickstarter')
export class Kickstarter extends BaseEntity {
  @PrimaryColumn({ name: "ID", type: "int" })
  id: number;

  @Column({ name: "name", type: "varchar", nullable: true })
  name: string;

  @Column({ name: "category", type: "varchar", nullable: true })
  category: string;

  @Column({ name: "main_category", type: "varchar", nullable: true })
  mainCategory: string;

  @Column({ name: "currency", type: "varchar", nullable: true })
  currency: string;

  @Column({ name: "deadline" , type: "date", nullable: true })
  deadline: Date;

  @Column({ name: "goal", type: "float", nullable: true })
  goal: number;

  @Column({ name: "launched" , type: "date", nullable: true })
  launched: Date;

  @Column({ name: "pledged", type:"float", nullable: true })
  pledged: number;

  @Column({ name: "state", type: "varchar", nullable: true })
  state: string;

  @Column({ name: "backers", type: "int", nullable: true })
  backers: number;

  @Column({ name: "country", type: "varchar", nullable: true })
  country: string;

  @Column({ name: "usd_pledged", type:"float", nullable: true })
  usdPledged: number;

  @Column({ name: "usd_pledged_real", type:"float", nullable: true })
  usdPledgedReal: number;

  @Column({ name: "usd_goal_real", type:"float", nullable: true })
  usdGoalReal: number;
}