import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'dummy',

})

export class DummyPipe implements PipeTransform {
   transform(): string {
     return "hello";
   }
}
