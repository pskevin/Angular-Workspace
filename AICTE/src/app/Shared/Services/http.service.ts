import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class HttpService {

  constructor(private http : Http) { }
  
  getData() {
    console.log("HTTP");
    return this.http.get('http://localhost:3000/user')
      .map((response: Response) => response.json());
  }
  
  /*postData( data: any ) {
    const body = JSON.stringify(data);
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/user', body,{headers} )
      .map((response: Response) => response.json());
  }
  
  putData( data: any ) {
      const body = JSON.stringify(data);
      let headers = new Headers();
          headers.append('Content-Type', 'application/json');
      return this.http.put('http://localhost:3000/user', body,{headers} )
        .map((response: Response) => response.json());
    }*/
}
