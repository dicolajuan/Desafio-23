let mongoose = require('mongoose');
const mensajesCollection = 'mensajes';

const MensajeEsquema = mongoose.Schema({
    author: {type: Object},
    fecha: {type: String, require: true},
    texto: {type: String, require: true, unique: true, minLength: 1, maxLenghth: 200},
});

const Mensaje = mongoose.model(mensajesCollection, MensajeEsquema);

module.exports = { Mensaje };