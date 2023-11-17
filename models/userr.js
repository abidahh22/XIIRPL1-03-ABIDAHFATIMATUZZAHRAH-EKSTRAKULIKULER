const { default: mongoose } = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama_ekskull: {
        type: String,
        require: [true, 'Silahkan isi nama ekskull'],
        //unique: false
    },
    nama_pembimbing: {
        type: String,
        require: [true, 'Silahkan isi nama pembimbing'],
        //unique: false
    },
    nama_ketua_ekskull: {
        type: String,
        require: [true, 'Silahkan isi nama ketua ekskull'],
        //unique: false
    },
    jumlah_anggota: {
        type: String,
        require: [true, 'Silahkan isi jumlah anggota'],
        //unique: false
    },
    sosmed_ekskull: {
        type: String,
        require: [true, 'Silahkan isi username sosial media ekskull'],
        //unique: false
    },
    
})

module.exports = mongoose.model('User', UserSchema)