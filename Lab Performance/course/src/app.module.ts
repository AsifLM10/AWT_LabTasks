import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseModule } from './course/course.module';

@Module({
  imports: [
    CourseModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'course_db',

      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}