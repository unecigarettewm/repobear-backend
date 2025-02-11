import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Dto } from 'src/lib/dto/Dto';
import { RepositoryOwnerDto } from './repositoryOwner.dto';
import { AuthUserDto } from 'src/public/users/dto/authUser.dto';

export class UserRepositoryDto extends Dto<UserRepositoryDto> {
  @IsNumber()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  html_url: string;

  @IsString()
  @IsNotEmpty()
  default_branch: string;

  @IsString()
  @IsNotEmpty()
  clone_url: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: RepositoryOwnerDto })
  owner: RepositoryOwnerDto;

  @ApiProperty({ type: AuthUserDto })
  @IsNotEmpty()
  user: AuthUserDto;
}
