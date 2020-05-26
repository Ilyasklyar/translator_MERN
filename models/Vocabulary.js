const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    textInput: {type: String, required: true},
    textTranslate: {type: String, required: true},
    owner: { type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Vocabulary', schema)