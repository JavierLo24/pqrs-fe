import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PQRS } from '../api/pqrs';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  constructor(private http: HttpClient) { }

  getPqrs() {
    return this.http.get(`${environment.api}/pqrs`);
  }

  savePqrs(pqrs: PQRS, semillero: any) {
    const url = `${environment.api}/pqrs/create`;
    const params = { semilleroID: semillero, tipoPQRSID: 1 };
    return this.http.post<PQRS>(url, pqrs, { params });
  }

  deletePqrs(id: string) {
    return this.http.delete(`${environment.api}/pqrs/${id}`);
  }

  changeStatePqrs(id: string, state: string) {
    return this.http.put(`${environment.api}/pqrs/${id}`, { state });
  }

  getSemilleros(){
    return this.http.get(`${environment.api}/semilleros`);
  }

}
