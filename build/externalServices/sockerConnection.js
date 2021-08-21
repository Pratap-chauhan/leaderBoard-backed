"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketConnection = void 0;
var encryptMessage_1 = require("./encryptMessage");
// import data from "../constants/data.json";
var SocketConnection = /** @class */ (function () {
    function SocketConnection() {
    }
    SocketConnection.prototype.sockerInitialization = function (socket) {
        this.socket = socket;
    };
    SocketConnection.prototype.emitMessage = function () {
        var _this = this;
        try {
            var randomNumber = Math.floor(Math.random() * 100);
            var sumCheckMessage = {
                name: "",
                origin: "",
                destination: "",
            };
            var hashedKey = encryptMessage_1.messageEncryption.createHash(sumCheckMessage);
            var name_1 = encryptMessage_1.messageEncryption.encryptMessage(sumCheckMessage.name, hashedKey);
            var origin_1 = encryptMessage_1.messageEncryption.encryptMessage(sumCheckMessage.origin, hashedKey);
            var destination = encryptMessage_1.messageEncryption.encryptMessage(sumCheckMessage.destination, hashedKey);
            var messageString = name_1 + "|" + origin_1 + "|" + destination + "|" + hashedKey;
            this.socket && this.socket.emit("sending_data", messageString);
            setInterval(function () {
                _this.emitMessage();
            }, 10000);
        }
        catch (e) {
            console.log("erroremit", e);
        }
    };
    return SocketConnection;
}());
exports.socketConnection = new SocketConnection();
