/*
Ligação dos dois logs: 
data/hora (pensei em ano + mês + dia + hora + minuto + segundo) + nome da política + incidente + gestor (usuário da aplicação);
*/
const mongoose = require('mongoose');


const Log = mongoose.model('Log', {
    eventTime: { type: Date, default: Date.now },
    userEmail: String,
    operation: String,
    object: String,
    details: String
});

module.exports = Log;