import Constant from "./Constant";
import { post } from "./Hinet";
import { saveBoarding } from "./utils/BoardingUtils";

export default class LoginDao {
    private static instance: LoginDao;
    private constructor() {}
    public static getInstance(): LoginDao {
        if(!LoginDao.instance) {
            LoginDao.instance = new LoginDao;
        }
        return LoginDao.instance;
    }
    login(userName: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const {
                login: {api}
            } = Constant;
            const formData = new FormData();
            formData.append('userName', userName);
            formData.append('password', password);
            post(api)(formData)().then((res:any)=>{
                const {code, data, msg} = res;
                if(code === 0) {
                    saveBoarding(data);
                    resolve(data||msg);
                }else {
                    reject(res);
                }
            }).catch((e)=>{
                console.log(e);
                reject({code: -1, msg: '報錯了'});
            })
        })
    }
};
