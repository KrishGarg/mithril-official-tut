const m = require("mithril");

const UserList = require("./views/UserList");
const UserForm = require("./views/UserForm");
const Layout = require("./views/Layout");

const app = document.getElementById("app");

// To just mount a view.
// m.mount(app, UserList);

// To add routing
m.route(app, "/list", {
  "/list": {
    render: function () {
      return m(Layout, m(UserList));
    },
  },
  "/edit/:id": {
    render: function (vnode) {
      return m(Layout, m(UserForm, vnode.attrs));
    },
  },
});
