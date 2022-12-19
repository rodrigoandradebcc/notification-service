import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notifications.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    console.log(body);

    // return this.prisma.notifications.create({
    //   data: {
    //     id: randomUUID(),
    //     content: 'Você tem uma nova solicitação de amizade',
    //     category: 'social',
    //     recipientId: randomUUID(),
    //   },
    // });
  }
}
