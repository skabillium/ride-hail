import { ApiProperty } from '@nestjs/swagger';
import { QuestionDto } from './question.dto';

export class CreateSurveyDto {
  @ApiProperty()
  users: string[];

  @ApiProperty()
  questions: QuestionDto[];
}
