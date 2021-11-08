import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsIn, IsOptional } from 'class-validator';

export class QuestionDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  text: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsIn(['SingleChoice', 'MultipleChoice', 'FreeText'])
  type: 'SingleChoice' | 'MultipleChoice' | 'FreeText';

  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  options?: string[];
}
