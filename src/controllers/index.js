class IndexController {
    constructor() {
    }

    getHome(req, res) {
        res.send('Welcome to the Home Page!');
    }

}

module.exports = new IndexController();