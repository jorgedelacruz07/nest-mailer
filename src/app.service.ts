require('dotenv').config()

import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { MailerDto } from './dto/mailer.dto';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) { }

  getHello(): string {
    return 'Hello World!';
  }

  public mailerTemplate(mailerDto: MailerDto): void {
    this
      .mailerService
      .sendMail({
        to: process.env.EMAIL_ID,
        from: 'no-reply@gmail.com',
        subject: 'Empresa - Página de Contacto',
        template: 'index',
        context: {
          name: mailerDto.name,
          email: mailerDto.email,
          phone: mailerDto.phone,
          body: mailerDto.body,
        },
      })
      .then((success) => {
        console.log(success)
      })
      .catch((err) => {
        console.log(err)
      });
  }
}
