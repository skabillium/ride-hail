import { ApiProperty } from '@nestjs/swagger';

export class QuestionDto {
  @ApiProperty({ example: 'First question?' })
  text: string;

  @ApiProperty()
  type: 'SingleChoice' | 'MultipleChoice' | 'FreeText';

  @ApiProperty({ example: ['Option 1', 'Option 2'] })
  options?: string[];
}
