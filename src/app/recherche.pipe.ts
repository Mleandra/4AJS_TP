import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {
  transform(value: any, args?:any): any {
    if(!value) return null;
    if(!args) return value;
    args=args.toLocaleString();
    return value.filter((items:any)=>{
      return JSON.stringify(items).toLowerCase().includes(args);
    })
  }

}
