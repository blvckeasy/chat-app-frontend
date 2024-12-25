import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IUser } from '../interfaces/user.interfaces';
import { environment } from '../environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<IUser[]> {
        const token = localStorage.getItem('access_token');
        
        if (!token) {
            alert('Token is required!');
            return throwError(() => new Error('No token found in localStorage.'));
        }

        const headers = new HttpHeaders({ token });
        const url = `${environment.backendUrl}/users`;

        return this.http.get<{ ok: boolean; data: IUser[]; message: string }>(url, { headers }).pipe(
            map(response => {
                if (!response.ok) {
                    throw new Error(response.message);
                }
                return response.data;
            }),
            catchError(error => {
                console.error('Error fetching users:', error);
                return throwError(() => error);
            })
        );
    }
}
