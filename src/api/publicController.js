import svgCaptcha from 'svg-captcha'
class PublicController {
    constructor() {}
    async getCaptcha(ctx) {
        const captcha = svgCaptcha.create({});
        console.log(captcha);
        ctx.body = {
            code: 200,
            data: captcha.data
        }
    }
}

export default new PublicController()