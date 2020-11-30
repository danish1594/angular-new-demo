import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './id/token.service';

@Injectable({


    providedIn: 'root'
})






export class AuthService implements CanActivate {

    constructor(public router: Router, public tokenService: TokenService) {



    }
    canActivate(): boolean {

        if (!this.tokenService.TokenValid()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;


    }

}

