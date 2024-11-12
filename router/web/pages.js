module.exports = {
  group: {
    prefix:'/pages'
  },
  routes: [
    {
      method: "get",
      path: "/",
      handler: (req, res) => {
        res.send("Home page. For real?");
      },
    },
    {
      method: "get",
      path: "/about",
      handler: (req, res) => {
        res.send("About page. For real?");
      },
    },
    {
      method: "get",
      path: "/contact",
      handler: (req, res) => {
        res.send("Contact page. For real?");
      },
    },
  ],
};
