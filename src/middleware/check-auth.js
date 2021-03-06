const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        // const decoded = jwt.verify(token, 'abc');
        req.userData = decoded;
        next();
    } catch (error) {
        next({
            message: 'Auth failed',
            status: 401
        });
    }
};