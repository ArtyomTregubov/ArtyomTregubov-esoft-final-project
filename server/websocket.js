const ws = require('ws'); 

const wss = new ws.WebSocketServer({ 
    port: 5000,
}, () => console.log('Server startted on 5000'))


wss.on('connection', function connection(ws) {
    ws.on('message', function (message) {
        message = JSON.parse(message);
        switch (message.event) {
            case 'message':
                broadcastMessage(message)
                console.log('message', message)
                break;
            case 'connection':
                broadcastMessage(message)
                console.log('connection',message)
                break;
        }
    })
})


function broadcastMessage(message) {
    wss.clients.forEach(client => {
        client.send(JSON.stringify(message))
        console.log('broadcastMessage', message)
    })
}





// const message = {
//     event: 'message/connection',
//     id: 123,
//     date: '30.06.2026',
//     ussername: 'Том Харди',
//     message: 'Хей гайз'
// }