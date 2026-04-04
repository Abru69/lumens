import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { ContactRequest, ContactResponse } from '../../shared/models/models';

/**
 * ContactService handles form submission to a REST API.
 * Currently simulates an API call. Replace BASE_URL with your real endpoint.
 */
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly http = inject(HttpClient);

  // Replace with your actual API endpoint
  private readonly BASE_URL = 'https://api.altusdev.com/v1';

  /**
   * Submits the contact/proposal request.
   * TODO: Replace simulated call with real HTTP POST when API is ready.
   */
  submitProposal(payload: ContactRequest): Observable<ContactResponse> {
    // SIMULATED: Remove this block and uncomment the HTTP call below when API is ready
    console.log('[ContactService] Submitting proposal:', payload);
    return of({ success: true, message: 'Propuesta enviada correctamente.' }).pipe(
      delay(1200),
      tap((res) => console.log('[ContactService] Response:', res))
    );

    // REAL API CALL (uncomment when ready):
    // return this.http.post<ContactResponse>(`${this.BASE_URL}/proposals`, payload);
  }
}
