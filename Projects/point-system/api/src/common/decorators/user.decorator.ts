import { ExecutionContext, createParamDecorator } from '@nestjs/common';

import { UserEntity } from '../../modules/users/entities/user.entity';

export const CurrentUser = createParamDecorator((data: keyof UserEntity, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  console.log(request);
  return request.user;
});
