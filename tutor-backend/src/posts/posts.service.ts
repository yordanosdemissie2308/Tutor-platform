import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findAll(visibility?: string) {
    return this.prisma.post.findMany({
      where: visibility && visibility !== 'all' ? { visibility } : {},
      include: {
        author: { select: { name: true, role: true } },
      },
      orderBy: { timestamp: 'desc' },
    });
  }

  async create(userId: number, data: any) {
    return this.prisma.post.create({
      data: {
        content: data.content,
        visibility: data.visibility,
        tags: data.tags,
        authorId: userId,
      },
    });
  }
}