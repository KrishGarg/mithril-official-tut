const m = require("mithril");
const User = require("../models/User");

/*
  A view is just an object with a view method
  which returns the html elements needed.
  oninit is the lifecycle method for 
  onComponentMount.
*/
module.exports = {
  oninit: User.loadList,
  view: function () {
    return m(
      ".user-list",
      User.list.map(function (user) {
        return m(
          m.route.Link,
          {
            class: "user-list-item",
            href: "/edit/" + user.id,
          },
          user.firstName + " " + user.lastName
        );
      })
    );
  },
};
