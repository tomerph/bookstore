import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'removeNoneEnglish'
})
export class RemoveNoneEnglish implements PipeTransform {
    transform(value : string){
       
        return value.replace(/[^a-z\u0400-\u04FF]/gi," ");



    }

}