import { ApiProperty } from '@nestjs/swagger';

export class CreateRatingDto {
  @ApiProperty()
  user: string;

  @ApiProperty()
  ride: string;

  @ApiProperty()
  stars: number;
}
