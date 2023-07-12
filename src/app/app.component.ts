import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user:any = {};
  title = 'myApp';
  loginUser(item:any){
    if (item.valid){
      console.log(this.user)
    }
  }
}
