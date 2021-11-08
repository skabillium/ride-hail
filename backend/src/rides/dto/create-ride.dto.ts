import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString, IsNotEmpty } from 'class-validator';

export class CreateRideDto {
  @ApiProperty()
  @IsMongoId()
  user: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  vehicle: string;
}
