import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateDepartmentRestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  manager: string;

  @IsNumber()
  @IsNotEmpty()
  emps_no: number;
}

export class UpdateDepartmentRestDto extends PartialType(CreateDepartmentRestDto) {}
