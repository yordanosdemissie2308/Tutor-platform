import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(@Query('visibility') visibility: string) {
    return this.postsService.findAll(visibility);
  }

  @Post()
  createPost(@Body() data: any) {
    // In a real app, get userId from the login token (JWT)
    // For now, we'll assume userId is passed in the body
    return this.postsService.create(data.userId, data);
  }
}