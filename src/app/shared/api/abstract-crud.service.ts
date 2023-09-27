import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class AbstractCrudService<T extends { id?: number }> {
  private httpClient: HttpClient;

  constructor(private endPoint: string) {
    this.httpClient = inject(HttpClient);
  }

  get(id: number): Observable<T> {
    return this.httpClient.get<T>(this.endPoint + '/' + id);
  }

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.endPoint);
  }

  create(data: T): Observable<T> {
    return this.httpClient.post<T>(this.endPoint, data);
  }

  update(data: T): Observable<T> {
    return this.httpClient.put<T>(this.endPoint + '/' + data.id, data);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.endPoint + '/' + id);
  }
}
