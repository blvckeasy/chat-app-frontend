import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
    providedIn: 'root',
})
export class MessagesService {
    constructor (
		private http: HttpClient,
	) {}

	getMessages (to_user_id: string): Observable<any> {
		const token = localStorage.getItem('access_token');

		if (!token) {
            alert('Token is required!');
            return throwError(() => new Error('No token found in localStorage.'));
        }

		const headers = new HttpHeaders({ token });
		const url = `${environment.backendUrl}/messages/${to_user_id}`;

		return this.http.get<{ ok: boolean, data: any, message: string }>(url, { headers }).pipe(
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
		)
	}
}
