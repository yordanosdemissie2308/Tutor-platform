import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Controller('families')
export class FamiliesController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getAllFamilies() {
    return this.prisma.familyProfile.findMany({
      include: { user: { select: { name: true } } }
    });
  }
}