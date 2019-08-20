module.exports = {
    succes: (res, status, result) => {
        const formResponse = {
            status,
            result,
        };
        res.json(formResponse);
    },
    put: (res, status, result) => {
        if (result.affectedRows !== 1) {
            const formResponse = {
                status: 'Not Found Param',
                res: 'not Found'
            }
            res.json(formResponse, 403)

        } else {
            const formResponse = {
                status,
                result,
            };
            res.json(formResponse);

        }
    },
}