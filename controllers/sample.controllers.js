const db = require("./../config/db");

exports.sample = async (req, res, next) => {

    try {
        const {
            rows
        } = await db.query('SELECT * FROM "Temap"');
        console.log('rows', rows)
        res.send(rows[0])
    } catch (ex) {
        const error = {};
        error.message = "Issue with DB Query";
        error.stack = ex;
        next(error);
    }


};