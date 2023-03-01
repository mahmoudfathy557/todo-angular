import * as mongoose from 'mongoose';

export const DepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  manager: { type: String, required: true },
  emps_no: { type: Number, required: true },
});

// export interface Department extends mongoose.Document {
//   id?: string;
//   name: string;
//   manager: string;
//   emps_no: number;
// }

import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'department ' })
export class Department {
  @Field((type) => ID)
  id?: string;

  @Field()
  name: string;

  @Field()
  manager: string;

  @Field((type) => Int)
  emps_no: number;
}
