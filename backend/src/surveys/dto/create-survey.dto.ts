import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsMongoId, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { QuestionDto } from './question.dto';

export class CreateSurveyDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId({ each: true })
  users: string[];

  @ApiProperty({
    example: [
      {
        text: 'Question1',
        type: 'SingleChoice',
        options: ['Option1', 'Option2'],
      },
    ],
  })
  @ValidateNested({ each: true })
  @Type(() => QuestionDto)
  questions: QuestionDto[];
}
