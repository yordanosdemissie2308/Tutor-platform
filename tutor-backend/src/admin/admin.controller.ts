import { Controller, Get, Patch, Param, Body } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('admin')
export class AdminController {
  constructor(private prisma: PrismaService) {}

  @Get('users')
  async getAllUsers() {
    return this.prisma.user.findMany({
      include: { familyProfile: true, tutorProfile: true }
    });
  }

  @Patch('approve-tutor/:id')
  async approveTutor(@Param('id') id: string) {
    return this.prisma.tutorProfile.update({
      where: { userId: +id },
      data: { isApproved: true }
    });
  }
}