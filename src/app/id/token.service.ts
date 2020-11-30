import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators'

@Injectable({

providedIn:'root'


})



export class TokenService{

constructor(private route:ActivatedRoute){
const fragment:string=route.snapshot.fragment;
}
 token_name :string ;
 expiration_date:Date;

getToken(){

   return  this.route.fragment.pipe(map(fragment => new URLSearchParams(fragment)),map(params =>({
access_token : params.get('access_token'),
id_token: params.get('id_token'),
error: params.get('error'),
///Expires_in: params.get();
expires_in:params.get('expires_in')

}))).subscribe(res=>{console.log('',this.token_name=res.access_token,this.expiration_date= 
new Date(new Date().getTime()+ +res.expires_in)),
   localStorage.setItem('access_token',this.token_name);
  console.log(localStorage.getItem('access_token'));
   })


}

TokenValid(){

if(!localStorage.getItem('access_token') && new Date()>this.expiration_date)
{

return false;

}
else{

   return true;
}

}
 
 

}