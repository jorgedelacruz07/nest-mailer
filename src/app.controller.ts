import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { MailerDto } from './dto/mailer.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  sendTemplate(@Res() res, @Body() mailerDto: MailerDto) {
    this.appService.mailerTemplate(mailerDto);
    return res.status(HttpStatus.OK).json({
      message: 'Message sended',
    });
  }
}
