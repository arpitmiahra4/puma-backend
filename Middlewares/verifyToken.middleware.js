// middleware function to verify JWT
const verifyToken = (req, res, next) => {
    // get the token from the header
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};


export { verifyToken }
