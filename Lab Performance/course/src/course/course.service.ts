import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {

  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  findAll() {
    return this.courseRepository.find();
  }

  async remove(id: number) {
    await this.courseRepository.delete(id);
    return { message: 'Course deleted successfully' };
  }

  findOne(id: string) {
  return this.courseRepository.findOneBy({
    id: Number(id),
  });
}

}