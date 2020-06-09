import { CookieService } from 'ngx-cookie-service';
import { DatasulRestService } from './datasul-rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularProxy';

  constructor(
    private DatasulRestService: DatasulRestService,
    private cookie: CookieService
  ){}

  ngOnInit(){
    console.log("Iniciando...");
    
    this.DatasulRestService.login("super", "hFG6ihTXl1PTTLM7UbpGtLAl64E%3D")
    .subscribe(
      (data: any) => {
        this.cookie.set('JOSSO_SESSIONID', data);
        this.cookie.set('user', 'super');
      }, 
      (error: any) => {
        console.log(error);
      });

    this.DatasulRestService.getItens()
    .subscribe(
      (data: any) => {
        console.log(data);
      }, 
      (error: any) => {
        console.log(error);
      });
  }
}
