import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { QuestionDto } from './question.dto';

export class CreateSurveyDto {
  @ApiProperty()
  users: string[];

  @ApiProperty()
  @Type(() => QuestionDto)
  questions: QuestionDto[];
}
