class PageController {
  async home(req, res) {
    // res.send("HomePage");
    res.render('home')
  }
  async about(req, res) {
    // res.send("AboutPage");
    res.render('about')

  }
  async contact(req, res) {
    // res.send("ContactPage");
    res.render('contact')

  }
}

module.exports = new PageController();
