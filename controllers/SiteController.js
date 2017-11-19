const SiteController = {};

SiteController.index = function(req, resp){
  resp.render("/")
}

SiteController.about = function(req, resp){
  resp.render("/about")
}

SiteController.contact = functon(req, resp){
  resp.render("/contact")
}

module.exports = SiteController;
