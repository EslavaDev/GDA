const port = process.env.PORT || 3770;
const env = 'dev' || 'prod';
const app = require('./server');


app.listen(port, () => {
    console.log(`[camilo-server]  listening on port ${port}`, console.log(`mode ${env}`))
})		