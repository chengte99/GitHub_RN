import Constant from "./Constant";
import { post } from "./Hinet";

export default class RegisterDao {
    private static instance: RegisterDao;
    private constructor() { };
    public static getInstance(): RegisterDao {
        if (!RegisterDao.instance) {
            RegisterDao.instance = new RegisterDao();
        }
        return RegisterDao.instance;
    }
    register(userName: string, password: string, imoocId: string, orderId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const {
                registration: { api }
            } = Constant;
            const formData = new FormData();
            formData.append('userName', userName);
            formData.append('password', password);
            formData.append('imoocId', imoocId);
            formData.append('orderId', orderId);
            post(api)(formData)().then((res:any)=>{
                const {code, data, msg} = res;
                if(code === 0) {
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
