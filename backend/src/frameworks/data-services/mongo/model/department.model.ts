import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';

export type DepartmentDocument = Department & Document;

@Schema()
export class Department {
  @Prop()
  name: string;

  @Prop()
  manager: string;
  @Prop()
  emps_no: number;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);

@ObjectType({ description: 'department' })
export class DepartmentGraphqlModel {
  @Field((type) => ID)
  id?: string;

  @Field()
  name: string;

  @Field()
  manager: string;

  @Field((type) => Int)
  emps_no: number;
}
