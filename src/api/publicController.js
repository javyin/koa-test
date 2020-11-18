import svgCaptcha from 'svg-captcha'
class PublicController {
    constructor() {}
    async getCaptcha(ctx) {
        const captcha = svgCaptcha.create({
            size: 4,  //  验证码个数
            ignoreChars: '0o1il', // 不使用某些字符
            noise: Math.floor(Math.random() * 4),   //  干扰线的数量,
            color: true,
            width: 150,
            height: 50
        });
        console.log(captcha);
        ctx.body = {
            code: 200,
            data: captcha.data
        }
    }
}

export default new PublicController()