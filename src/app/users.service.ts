import { Injectable } from '@angular/core';
interface dataType{
  name: string,
  id:number,
  indian:string,
  address:any
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getData(){
    const data:dataType={
      name:"vijay mane",
      id:36,
      indian:"yes",
      address:'Belagavi'
    }
    return data;
  }
}
