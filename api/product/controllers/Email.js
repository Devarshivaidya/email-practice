module.exports = {
    index: async ctx => {
        await createStrapi.plugins['email'].services.email.send({
            to : "devarshi.vaidya@augustinfotechteam.com",
            from: "devarshi.vaidya@augustinfotechteam.com",
            replyTo: "devarshivaidya2307@gmail.com",
            subject: "testing",
            text: "sendgrid email"
        });
        ctx.send("email sent !")
    }
}