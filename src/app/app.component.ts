import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://i.guim.co.uk/img/media/7cef2d0585a6aed1638f43b4fc10fb0945b39f3f/0_0_6720_4480/master/6720.jpg?width=1020&quality=85&auto=format&fit=max&s=702214986431d2c40e87dc4f34844cfd',
      description: 'New Iork'
    },
    {
      url: 'https://ogimg.infoglobo.com.br/in/13895040-e78-79c/FT1086A/xquebec.jpg.pagespeed.ic.ve6QpxzeUx.jpg',
      description: 'Quebec'
    }
  ]
}
