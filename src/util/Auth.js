const Auth = {
    isAuthenticated() {
        return localStorage.getItem("isAuthenticated")
    },
    authenticate(cb) {
        Auth.SetUser(cb);
        Auth.isAuthenticated = true;
        localStorage.setItem("isAuthenticated", true);
    },
    GetUser() {
        return JSON.parse(localStorage.getItem("user") || "null");
    },
    SetUser(newUser) {
        localStorage.setItem("user", JSON.stringify(newUser));
    },
    Check() {
        if (localStorage.getItem("isAuthenticated")) {
            return true;
        }
        if (localStorage.getItem("user") !== null) {
            return !Auth.GetUser().anonymous;
        }
        return false;
    },
    signout() {
        localStorage.setItem("isAuthenticated", false);
        localStorage.removeItem("user");
    },
    setConference(value) {
        localStorage.setItem("conference", JSON.stringify(value));
    },
    getConference(key) {
        const conference = JSON.parse(localStorage.getItem("conference") || "{}");
        if (conference && conference[key]) {
            return conference[key];
        }
        return null;
    },
    GetPermission(key) {
        var permission = JSON.parse(localStorage.getItem("user") || "{}");
        if (permission === "{}") return false;
        permission = permission["permission"];
        console.log(permission);
        for (var i in permission) {
            if (permission[i] === key) {
                return true;
            }
        }
        return false;
    }
};
export default Auth;
