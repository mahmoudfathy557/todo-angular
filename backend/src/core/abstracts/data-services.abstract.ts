import { DepartmentGraphqlModel } from 'src/frameworks/data-services/mongo/model';
import { Department, Book, Genre } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract departments: IGenericRepository<DepartmentGraphqlModel>;

  // abstract books: IGenericRepository<Book>;

  // abstract genres: IGenericRepository<Genre>;
}
