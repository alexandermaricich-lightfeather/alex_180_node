const findOwner = (req, res) => {
    const message = "findOwner";
    console.log(message);
    res.send(message);
}

module.exports = {
    findOwner,
}