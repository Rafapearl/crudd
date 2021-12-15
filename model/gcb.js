const mongoose = require("mongoose");

const gcbModel = new mongoose.Schema({
    nome: { type: String, required: true},
    idade: { type: Number, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const gcb = mongoose.model("gcb", gcbModel);

module.exports = gcb;