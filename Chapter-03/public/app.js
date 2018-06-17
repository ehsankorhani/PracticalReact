"use strict";

var admin = {
  firstName: "Ehsan",
  lastName: "Korhani"
};

var curentYear = new Date().getFullYear();

var getFullName = function getFullName(person) {
  if (person.firstName && person.lastName) {
    return person.firstName + " " + person.lastName;
  } else {
    return "Anonymous";
  }
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h2",
    null,
    "JSX Tutorial"
  ),
  React.createElement(
    "div",
    { className: "content-body" },
    React.createElement(
      "p",
      null,
      "Author: ",
      getFullName(admin)
    ),
    curentYear >= 2018 ? React.createElement(
      "div",
      null,
      curentYear
    ) : "old post"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
