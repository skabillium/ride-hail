import { ApiProperty } from '@nestjs/swagger';
import { SubmissionDto } from './submission.dto';

export class CreateResponseDto {
  @ApiProperty()
  user: string;

  @ApiProperty()
  survey: string;

  @ApiProperty()
  submissions: SubmissionDto[];
}
