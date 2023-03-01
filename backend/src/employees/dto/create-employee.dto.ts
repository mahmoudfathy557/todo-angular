import { Field, InputType, ID, Int } from '@nestjs/graphql';

@InputType()
export class NewEmployeeInput {
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
