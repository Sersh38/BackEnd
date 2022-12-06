const admin = true;

const isAdmin = (req, res, next) => {
    if(admin) next();
    else res.status(401).json({ msg: 'Access denied' })
};

export default isAdmin;