import { Field, InputType, ID, Int } from '@nestjs/graphql';

@InputType()
export class NewDepartmentInput {
  @Field()
  name: string;

  @Field()
  manager: string;

  @Field((type) => Int)
  emps_no: number;
}
