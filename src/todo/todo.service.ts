import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Todo} from "./todo.entity";
import {Repository, UpdateResult} from "typeorm";
import {AddTodoDto} from "./dto/addTodo.dto";
import {UpdateTodoDto} from "./dto/updateTodo.dto";

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find()
  }

  create(addTodoDto: AddTodoDto): Promise<Todo> {
    return this.todoRepository.save(addTodoDto)
  }

  update(updateTodoDto: UpdateTodoDto): Promise<UpdateResult> {
    return this.todoRepository.update({ id: updateTodoDto.id }, {
      ...updateTodoDto,
    })
  }

  findById(id: number): Promise<Todo | null> {
    return this.todoRepository.findOneBy({
      id: id,
    })
  }

  deleteById(id: number): void {
    this.todoRepository.delete({
      id: id,
    })
  }
}
