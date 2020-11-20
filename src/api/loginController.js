// import {main} from '../config/MailConfig'
import {main} from '../config/MailConfig-example'

class LoginController {
    construtor() {}
    async getMail(ctx) {
        let result = await main()
        ctx.body = {
            code: 200,
            msg: '发送邮件成功'
        }
    }
}

export default new LoginController()