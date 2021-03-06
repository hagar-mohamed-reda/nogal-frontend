import { Cache } from './cache';
import { LoginComponent } from './login/login.component';
export class Helper {


    public static redirect(res: any, service: any, router: any, action: any=null) {
        if (res.check == false) {
            let data: any = Cache.get('login');
            if (!data)
              return;
            LoginComponent.performLogin(data, service, router, action);
        }
    }
}
