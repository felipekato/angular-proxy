import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasulRestService {

  constructor(     
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  public login(user: string, pass: string): Observable<any>{    
    let uri = "/api/dts/datasul-rest/resources/login?username=" + user + "&password=" + pass;
    return this.http.get(uri, { responseType: 'text' });            
  }

  public getItens(): Observable<any>{    
    let uri = "/api/dts/datasul-rest/resources/prg/cdp/v1/testeparamitens";
    let jossoId = this.cookie.get('JOSSO_SESSIONID');
    let headers = new HttpHeaders({'JOSSO_SESSIONID': 'JOSSO_SESSIONID=' + jossoId});
    return this.http.get(uri, { headers });     
  }
}
