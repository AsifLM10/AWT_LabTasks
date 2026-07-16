import {
  Controller,
  Delete,
  Get,
  Param,
} from '@nestjs/common';

import { CourseService } from './course.service';

@Controller('course')
export class CourseController {

  constructor(
    private readonly courseService: CourseService,
  ) {}

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
findOne(@Param('id') id: string) {
  return this.courseService.findOne(id);
}

  @Delete(':id')
  remove(
    @Param('id') id: number,
  ) {
    return this.courseService.remove(id);
  }

}