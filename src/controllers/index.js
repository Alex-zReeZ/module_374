module.exports = {
    home: (req, res) => {
        res.send('Welcome to the home page!');
    },
    about: (req, res) => {
        res.send('About us page');
    },
    submit: (req, res) => {
        res.send('Form submitted successfully!');
    }
};
