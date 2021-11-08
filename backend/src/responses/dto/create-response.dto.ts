import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { SubmissionDto } from './submission.dto';

export class CreateResponseDto {
  @ApiProperty()
  @IsMongoId()
  user: string;

  @ApiProperty()
  @IsMongoId()
  ride: string;

  @ApiProperty()
  @IsMongoId()
  survey: string;

  @ApiProperty({
    example: [{ question: 'Example question', answer: 'Example answer' }],
  })
  @ValidateNested({ each: true })
  @Type(() => SubmissionDto)
  submissions: SubmissionDto[];
}
