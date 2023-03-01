import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  hiredAt: { type: String, required: true },
  age: { type: Number, required: true },
});

// export interface Employee extends mongoose.Document {
//   id?: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   age: number;
//   hiredAt: string;
// }

@ObjectType({ description: 'employee' })
export class Employee {
  @Field((type) => ID)
  id?: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
  @Field()
  email: string;

  @Field()
  hiredAt: string;

  @Field((type) => Int)
  age: number;
}
