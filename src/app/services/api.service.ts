import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from 'config/config';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private config = environment;
    constructor(private http: HttpClient) {}

    private get baseUrl(){
        return this.config.apiKey + '';
    }


}
