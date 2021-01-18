const app = require('express')();
// noinspection JSValidateTypes
const server = require('http').Server(app);
// noinspection JSValidateTypes
const io = require('socket.io')(server);
const next = require('next');

const IS_DEV = process.env.NODE_ENV !== 'production';
const PORT = IS_DEV ? 3000 : process.env.PORT;

const nextApp = next({ dev: IS_DEV });
const nextHandler = nextApp.getRequestHandler();

io.on('connect', socket => {
    setInterval(() => {
        socket.emit('now', {
            message: 'hello',
            timeSent: Date.now()
        });
    }, 1000);
});

nextApp
    .prepare()
    .then(() => {
        app.get('*', (req, res) => nextHandler(req, res));

        server.listen(PORT, err => {
           if (err) {
               throw err;
           }

           console.log(`Listening on port ${PORT}`);
        });
    })
