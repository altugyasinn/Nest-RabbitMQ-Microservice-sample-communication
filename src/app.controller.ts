import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserEvent } from './create-user.event';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_created')
    handleUserCreated(data: CreateUserEvent) {
      this.appService.handleUserCreated(data);
      console.log(1)
  }
}
