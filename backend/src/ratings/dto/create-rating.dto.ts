import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNumber, Min, Max } from 'class-validator';

export class CreateRatingDto {
  @ApiProperty()
  @IsMongoId()
  user: string;

  @ApiProperty()
  @IsMongoId()
  ride: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(5)
  stars: number;
}
