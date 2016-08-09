/**
 * Created by consultadd on 9/8/16.
 */
import {Injectable} from '@angular/core'
import {Http,Response,Headers} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class UserService{

constructor(private http :Http) {}


api ='http://52.221.233.254//api/v1/users/';
  ph_exit='check_phone_exists/';
  gen_Otp='generate_otp/';


sentMobileNo(mobile:string){
 let  body={'phone' :mobile};

  return this.http.post(this.api + this.ph_exit,body)
    .map(res=>res.json());
}
  sentOtp(mobile:string){
    let  body={'phone' :mobile};

    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http.post(this.api + this.gen_Otp,body,{headers:headers})
      .map(res=>res.json());
  }

}
