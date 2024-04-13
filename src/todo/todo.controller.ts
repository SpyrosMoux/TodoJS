import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { TodoService } from './todo.service';
import {Todo} from "./todo.entity";
import {AddTodoDto} from "./dto/addTodo.dto";
import {UpdateTodoDto} from "./dto/updateTodo.dto";
import {UpdateResult} from "typeorm";

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodo(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  addTodo(@Body() addTodoDto: AddTodoDto): Promise<Todo> {
    return this.todoService.create(addTodoDto);
  }

  @Get(':id')
  getById(@Param('id') id: number): Promise<Todo> {
    return this.todoService.findById(id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number): void {
    this.todoService.deleteById(id);
  }

  @Put()
  updateById(@Body() updateTodoDto: UpdateTodoDto): Promise<UpdateResult> {
    return this.todoService.update(updateTodoDto);
  }
}
