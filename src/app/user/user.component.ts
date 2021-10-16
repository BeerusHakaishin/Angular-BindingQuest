import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  User: any= {
    name : 'Hakaishin',
    firstName : 'Beerus',
    age : 28,
    quote : '',
    photo : 'https://shonakid.de/wp-content/uploads/2021/04/beerus-3.jpg'
  
  }; 

  hideAge: boolean = true; 

  constructor() { }

  ngOnInit(): void {
  }

}
