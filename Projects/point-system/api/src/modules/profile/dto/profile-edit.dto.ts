import { IsDefined, IsInt, IsOptional, IsString, Matches } from 'class-validator';

import { Match } from '../../../common/decorators/match.decorator';

export class ProfileEditDto {
  @IsOptional()
  @IsInt({ message: 'O campo de ID precisa ser um inteiro.' })
  id?: number;

  @IsOptional()
  @IsDefined({ message: 'O campo da Senha deve ser válido!' })
  @IsString({ message: 'O campo de Senha deve ser uma string!' })
  password?: string;

  @IsOptional()
  @IsDefined({ message: 'O campo da Nova Senha deve ser válido!' })
  @IsString({ message: 'O campo de Nova Senha deve ser uma string!' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'A senha deve conter pelo menos uma letra maiúscula, um caractere especial, um número e uma letra minúscula.',
  })
  newPassword?: string;

  @IsOptional()
  @IsDefined({ message: 'O campo da Confirmação da Senha deve ser válido!' })
  @IsString({ message: 'O campo de Confirmação da Senha deve ser uma string!' })
  @Match('newPassword', {
    message: 'As senhas não coincidem, por favor tente novamente.',
  })
  confirmPassword?: string;
}
