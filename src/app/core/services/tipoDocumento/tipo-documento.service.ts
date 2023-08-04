import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { TokenService } from '@/core/services/auth';
import { environment } from 'config/config';
import { Observable, map } from 'rxjs';
import { Response } from '@/core/models';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  private config = environment;
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  private get baseUrl(){
    return this.config.apiUrl + 'tipoDocumento/';
  }

  public getAll(): Observable<Response> {
    const endpoint = `${this.baseUrl}`;
    return this.http.get(endpoint, this.tokenService.requestOptions).pipe(map((res: any) => res));
  }

  public save(data: any): Observable<Response> {
    const endpoint = `${this.baseUrl}`;
    return this.http.post(endpoint, data, this.tokenService.requestOptions).pipe(map((res: Response) => res));
  }

}
