class SocketHandler {
    constructor (socket, io) {
        this.io = io;
        this.socket = socket;
        this.socket.on('broadcast', data => this.io.emit('broadcast', data))
    }
}

module.exports = SocketHandler;