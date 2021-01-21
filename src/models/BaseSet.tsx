import { Column, PrimaryColumn } from "typeorm";

export abstract class BaseSet {

    @Column()
    reps: number;
    
    @Column()
    weight: number;
    
    @Column()
    note: string;

    @PrimaryColumn()
    order: number;
    
}