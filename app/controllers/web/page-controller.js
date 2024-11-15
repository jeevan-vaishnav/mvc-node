class PageController {
  home(req, res) {
    throw new Error('An error happened');
    res.send("HomePage");
  }
  about(req, res) {
    res.send("AboutPage");
  }
  contact(req, res) {
    res.send("ContactPage");
  }
}

module.exports = new PageController();
