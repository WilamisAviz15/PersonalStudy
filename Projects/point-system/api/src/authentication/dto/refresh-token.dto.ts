import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class RefreshTokenDto {
  @IsDefined({ message: 'O campo do token deve ser válido!' })
  @IsString({ message: 'O campo do token deve ser uma string!' })
  @IsNotEmpty({ message: 'O campo do token não pode ser vazio!' })
  readonly token: string;
}
