import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../service/contact-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  contacts: any;

  constructor( private contactService: ContactServiceService) {}

  ngOnInit(){
    this.contactService.getUsers().toPromise().then((res)=>{
      this.contacts = res.results
      console.log(this.contacts)
    });
  }
}
