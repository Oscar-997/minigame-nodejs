const User = require("../models/User");

class SiteController {
  // [GET] home

  index(req, res, next) {
    res.render("home.hbs");
  }

  // [POST] register
  register(req, res, next) {
      if(!req.body.email || !req.body.fullname || !req.body.phonenumber) {
          res.json({result:0, message:"thong tin dang ky chua du"})
      } else {
          const user = new User({
              email: req.body.email,
              fullname: req.body.fullname,
              phonenumber: req.body.phonenumber,
              checkout: false,
              wallet: "",
          });
          user.save()
            .then(() => {
                res.redirect('back')
                console.log(user)
            })
            .catch(next);
    }
  }
}

module.exports = new SiteController();
