import { IsString, IsNotEmpty } from 'class-validator';

export class TokenVerificationDto {
  @IsString()
  @IsNotEmpty()
  idToken: string;
}

export default TokenVerificationDto;
