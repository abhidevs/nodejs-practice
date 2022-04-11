exports.getContactUs = (req, res, next) => {
  res.render("contact-us", {
    pageTitle: "Contact Us",
    path: "/contactus",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postContactUs = (req, res, next) => {
  console.log(req.body);
  res.redirect("/contactus/success");
};

exports.getContactUsSuccess = (req, res, next) => {
  res.render("success", {
    pageTitle: "Form successfully submitted",
    path: "/contactus/success",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
