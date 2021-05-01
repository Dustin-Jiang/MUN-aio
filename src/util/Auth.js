"use strict";
exports.__esModule = true;
var Auth = {
    isAuthenticated: false,
    authenticate: function (cb) {
        Auth.SetUser(cb);
        Auth.isAuthenticated = true;
    },
    GetUser: function () {
        return JSON.parse(localStorage.getItem("user") || "null");
    },
    SetUser: function (newUser) {
        localStorage.setItem("user", JSON.stringify(newUser));
    },
    Check: function () {
        if (Auth.isAuthenticated) {
            return true;
        }
        if (localStorage.getItem("user") !== null) {
            return !Auth.GetUser().anonymous;
        }
        return false;
    },
    signout: function () {
        Auth.isAuthenticated = false;
        var oldUser = Auth.GetUser();
        oldUser.id = 0;
        localStorage.setItem("user", JSON.stringify(oldUser));
    },
    SetPreference: function (key, value) {
        var preference = JSON.parse(localStorage.getItem("user_preference") || "{}");
        preference = preference == null ? {} : preference;
        preference[key] = value;
        localStorage.setItem("user_preference", JSON.stringify(preference));
    },
    GetPreference: function (key) {
        var preference = JSON.parse(localStorage.getItem("user_preference") || "{}");
        if (preference && preference[key]) {
            return preference[key];
        }
        return null;
    }
};
exports["default"] = Auth;
