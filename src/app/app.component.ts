import { Component } from '@angular/core';

interface dataType{
  name: string,
  id:number,
  indian:string,
  address:any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'model_interface';
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
