import { Field, InputType, ID, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateDepartmentDto {
  @Field()
  name: string;

  @Field()
  manager: string;

  @Field((type) => Int)
  emps_no: number;
}
@InputType()
export class UpdateDepartmentDto extends CreateDepartmentDto {}
