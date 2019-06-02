import { Controller, Get } from '@nestjs/common';
import { AppService }      from './app.service';

@Controller()
export class AppController {

    @Get('/hey_server')
    greeting(): string {
        return "Howdy!";
    }
}