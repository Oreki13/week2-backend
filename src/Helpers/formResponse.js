module.exports = {
    get: (res, status, result, param) => {
        if (result.length == 0) {
            const formResponse = {
                status: 404,
                massage: 'Data tidak di temukan'
            }
            res.json(formResponse, 404)
        } else {
            const resultLength = 'Data Ditemukan ' + result.length

            const formResponse = {
                status,
                massage: resultLength,
                Page: param.page,
                result
            };
            res.json(formResponse);

        }
    },
    patch: (res, status, result) => {

        if (result.affectedRows !== 1) {
            const formResponse = {
                status: "ID Tidak ditemukan",
                result

            };
            res.json(formResponse, 403);
        } else {
            const formResponse = {
                status,
                massage: "Data Berhasil Diubah",
                result
            };
            res.json(formResponse);
        }
    },
    post: (res, status, result) => {
        const massage = 'Ditambahkan ID ke ' + result.insertId
        const formResponse = {
            status,
            massage
        };
        res.json(formResponse);
    },
    delete: (res, status, result, id) => {
        if (result.affectedRows !== 1) {
            const massage = 'Data dengan ID ' + id + ' Tidak Ditemukan'
            const formResponse = {
                status,
                massage
            };
            res.json(formResponse, 404)
        } else {
            const massage = 'Telah Dihapus ID ' + id
            const formResponse = {
                status,
                massage,
                result
            };
            res.json(formResponse);
        }
    },
};