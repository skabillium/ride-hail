import { ApiProperty } from '@nestjs/swagger';

export class SubmissionDto {
  @ApiProperty()
  question: string;

  @ApiProperty()
  answer: string;
}
