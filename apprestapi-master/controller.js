'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan semua data siswa
exports.tampilsemuasiswa = function (req, res) {
    connection.query('SELECT * FROM siswa', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data siwa berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM siswa WHERE id_siswa = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data siswa
exports.tambahsiswa = function (req, res) {
    var nis = req.body.nis;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO siswa (nis,nama,jurusan) VALUES(?,?,?)',
        [nis, nama, jurusan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

//mengubah data berdasarkan id
exports.ubahsiswa = function (req, res) {
    var id = req.body.id_siswa;
    var nis = req.body.nis;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE siswa SET nis=?, nama=?, jurusan=? WHERE id_siswa=?', [nis, nama, jurusan, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

//Menghapus data berdasarkan id
exports.hapussiswa = function (req, res) {
    var id = req.body.id_siswa;
    connection.query('DELETE FROM siswa WHERE id_siswa=?',[id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}

//menampilkan matakuliah group
exports.tampilgroupmapel = function(req, res){
    connection.query('SELECT siswa.id_siswa, siswa.nis, siswa.nama, siswa.jurusan, matakuliah.matakuliah, matakuliah.sks from krs JOIN matakuliah JOIN siswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_siswa = siswa.id_siswa ORDER BY siswa.id_siswa',
        function (error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.oknested(rows, res);
            }
        }
    )

}


