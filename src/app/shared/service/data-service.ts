import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   constructor(private http: HttpClient) {
        this.getMockJSON().subscribe(data => {
        });
    }

    public getMockJSON(): Observable<any> {
        return this.http.get('./assets/mock-data/data.json');
    }
}
