import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, ValidateNested } from 'class-validator';
import { SubmissionDto } from './submission.dto';

export class CreateResponseDto {
  @ApiProperty()
  @IsMongoId()
  user: string;

  @ApiProperty()
  @IsMongoId()
  survey: string;

  @ApiProperty({
    example: [{ question: 'Example question', answer: 'Example answer' }],
  })
  @ValidateNested()
  submissions: SubmissionDto[];
}
