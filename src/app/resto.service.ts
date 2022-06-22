import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url = 'http://localhost:3000/restaurant';

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url)
  }

  saveRestoData(data) {
    return this.http.post(this.url, data)
  }

  deleteRestoData(id) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getCurrentRestoData(id) {
   return this.http.get(`${this.url}/${id}`)
  }

  updateRestoData(id, data) {
    return this.http.put(`${this.url}/${id}`, data)
  }
}
