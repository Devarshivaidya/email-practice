module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'devarshi.vaidya@augustinfotechteam.com',
        defaultReplyTo: 'devarshi.vaidya@augustinfotechteam.com',
      },
    },
    // ...
  });