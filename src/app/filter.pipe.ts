import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sName:string):any{
    if(sName===""){
    return value;
    }
    const userArray:any[]=[];
    for(let i=0;i<value.length;i++){
      let stdAadhar:string=value[i].stdAadharNumber;
      let stdName:string=value[i].stdName;
      let stdId:string=value[i].stdId;
      if(stdAadhar.includes(sName)){
        userArray.push(value[i])
      }
     else if(stdName.includes(sName)){
      userArray.push(value[i])
       }
       else if(stdId.includes(sName)){
        userArray.push(value[i])
         }
    }
    return userArray;
  }
}
