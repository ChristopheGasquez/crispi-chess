import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, authState } from '@angular/fire/auth';
import { from, map, Observable } from 'rxjs';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {}

  login(email: string, password: string): Observable<User> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      map((credential) => credential.user)
    );
  }


  logout(): Observable<void> {
    return from(this.auth.signOut());
  }

  isAuthenticated(): Observable<User | null> {
    return authState(this.auth); // déjà un Observable
  }
}
