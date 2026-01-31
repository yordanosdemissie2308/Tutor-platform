import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthService } from './auth/auth.service';
import { AdminController } from './admin/admin.controller';
import { FamiliesController } from './family/tutors.controller';

@Module({
  imports: [],
  controllers: [AdminController, FamiliesController],
  providers: [PrismaService, AuthService],
})
export class AppModule {}