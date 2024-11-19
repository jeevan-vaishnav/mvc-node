class PageController {
  async home(req, res) {
    // res.send("HomePage");
    res.render('home')
  }
  async about(req, res) {
    res.send("AboutPage");
  }
  async contact(req, res) {
    res.send("ContactPage");
  }
}

module.exports = new PageController();
