const rachelRoute = (req, res) => {
    res.send("Rachel Ray");
};
const maryRoute = (req, res) => {
    res.send("Mary J Ray");
};
module.exports = {
    rachelRoute,
    maryRoute
};