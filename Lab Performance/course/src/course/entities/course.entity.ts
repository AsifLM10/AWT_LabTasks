import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Course {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  course_name: string;

  @Column()
  credit: number;

  @Column()
  department: string;

}