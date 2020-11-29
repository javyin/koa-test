// import {main} from '../config/MailConfig'
import {main} from '../config/MailConfig-example'
import jsonwebtoken from 'jsonwebtoken'
import config from '../config/index'

class LoginController {
    constructor() {}
    async getMail(ctx) {
        let result = await main()
        ctx.body = {
            code: 200,
            msg: '发送邮件成功'
        }
    }
    async login(ctx) {
        debugger
        let token = jsonwebtoken.sign({_id: 'javyin'}, config.JWT_SECRET, {
            expiresIn: '1d'
        })
        ctx.body = {
            code: 200,
            token: token
        }
    }
}

export default new LoginController()