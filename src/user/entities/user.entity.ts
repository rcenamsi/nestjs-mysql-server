import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Gender {
  Male = 0,
  Female = 1,
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 25 })
  title: string;

  @Column({ length: 55 })
  first_name: string;

  @Column({ length: 55 })
  middle_name: string;

  @Column({ length: 55 })
  last_name: string;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @Column('date')
  birth_date: Date;

  @Column()
  is_active: boolean;
}
