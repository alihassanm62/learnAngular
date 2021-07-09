import { Pipe,PipeTransform } from "@angular/core";


@Pipe({
  name:'mypipe'
})
export class TitleCasePipe implements PipeTransform{

  /**
   *
   */
    transform(value:string,args?:any){

      if(!value)
        return '';
        var result:string[];
        var words=value.split(' ');

        var prepositions=['of','the'];
        for (let i = 0; i < words.length-1; i++) {
          if(i!=0 && prepositions.includes(words[i].toLowerCase())){
            words[i]=words[i].toLowerCase();
          }else{
            var first=words[i][0].toUpperCase();
            //words[i]= words[i].charAt(0).toUpperCase();
            words[i]=words[i].substr(0,1).toUpperCase()+words[i].substr(1).toLowerCase();
          }
        }


      return words.join(' ');
    }
}
