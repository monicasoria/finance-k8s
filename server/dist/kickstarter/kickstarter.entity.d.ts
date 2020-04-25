import { BaseEntity } from "typeorm";
export declare class Kickstarter extends BaseEntity {
    id: number;
    name: string;
    category: string;
    mainCategory: string;
    currency: string;
    deadline: Date;
    goal: number;
    launched: Date;
    pledged: number;
    state: string;
    backers: number;
    country: string;
    usdPledged: number;
    usdPledgedReal: number;
    usdGoalReal: number;
}
