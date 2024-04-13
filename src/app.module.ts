import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DataSource} from "typeorm";

@Module({
  imports: [
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'todojs-db',
      password: 'todojs-db',
      database: 'todojs-db',
      autoLoadEntities: true,
      synchronize: true
    })
  ],
})

export class AppModule {}
