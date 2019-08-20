module.exports = {
    succes: (res, status, result) => {
        const formResponse = {
            status,
            result,
        };
        res.json(formResponse);
    }
}