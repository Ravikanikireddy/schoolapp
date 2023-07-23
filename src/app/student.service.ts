import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getContents(): Observable<any> {
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students")
  }
  getContent(id:any): Observable<any> {
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students/"+id)
  }
  getFilteredContents(term: any): Observable<any> {
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?filter=" + term)
  }
  getSortedContents(column: any, order: any): Observable<any> {
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?sortBy=" + column + "&order=" + order)
  }
  getPageContents(limit: any, page: any):Observable<any> {
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?limit=" + limit + "&page=" + page)
  }
  createContents(data:any):Observable<any>{
    return this.httpClient.post("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students",data)
    }
  
  deleteContents(id:any):Observable<any> {
    return this.httpClient.delete("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students/"+id)
  }
}
