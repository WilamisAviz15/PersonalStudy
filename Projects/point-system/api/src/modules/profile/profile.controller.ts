import { Body, Controller, Patch, UseGuards } from '@nestjs/common';

import { RoleGuard } from './../../common/guards/auth-guard.guard';
import { ProfileService } from './profile.service';
import { AuthJwtInterface } from './../../authentication/interfaces/auth-jwt.interface';
import { ProfileEditDto } from './dto/profile-edit.dto';
import { UserInterface } from './../users/interfaces/user.interface';
import { CurrentUser } from './../../common/decorators/user.decorator';

@Controller('profile')
@UseGuards(RoleGuard)
export class ProfileController {
  constructor(private readonly service: ProfileService) {}

  @Patch('')
  @UseGuards(RoleGuard)
  async editProfile(
    @CurrentUser() user: AuthJwtInterface,
    @Body() data: ProfileEditDto,
  ): Promise<{ user: UserInterface; accessToken: string; message: string }> {
    return this.service.update(user, data);
  }
}
