import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'config/config';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  private config = environment;
  private subscription: Subscription = new Subscription();
  public isToken: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private authToken: string;

  constructor() { }

  public setIsToken(token: string){
    this.isToken.next(token);
  }

  public getIsToken(){
    return this.isToken.asObservable();
  }

  public get requestOptions(): { headers: HttpHeaders } {
    this.subscription.add(
      this.getIsToken().subscribe((token: string) => (this.authToken = token))
    );

    const headers: HttpHeaders = new HttpHeaders().set('api_token', `${this.authToken}`).set('app_token', this.config.apiKey);
    return {
      headers: headers
    };
  }
}
