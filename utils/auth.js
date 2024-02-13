//doesn't allow anybody to view a page unless logged in
const withAuth = (req, res, next) => {
    if(!req.session.logged_in) {
        res.redirect('/login');
    }else {
        next();
    }
};

module.exports = withAuth;