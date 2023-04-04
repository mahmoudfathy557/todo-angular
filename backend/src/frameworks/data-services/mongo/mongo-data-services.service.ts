import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, Genre, IDataServices, IGenericRepository } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import {
  Department,
  DepartmentDocument,
  // Book,
  // BookDocument,
  // Genre,
  // GenreDocument,
} from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  departments: MongoGenericRepository<Department>;
  // books: MongoGenericRepository<Book>;
  // genres: MongoGenericRepository<Genre>;

  constructor(
    @InjectModel(Department.name)
    private DepartmentRepository: Model<DepartmentDocument | Department>,
    // @InjectModel(Book.name)
    // private BookRepository: Model<BookDocument>,
    // @InjectModel(Genre.name)
    // private GenreRepository: Model<GenreDocument>,
  ) {}
 

  onApplicationBootstrap() {
    this.departments = new MongoGenericRepository<Department>(this.DepartmentRepository);
    // this.books = new MongoGenericRepository<Book>(this.BookRepository, [
    //   'author',
    //   'genre',
    // ]);
    // this.genres = new MongoGenericRepository<Genre>(this.GenreRepository);
  }
}
