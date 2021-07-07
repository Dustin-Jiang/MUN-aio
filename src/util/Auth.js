const Auth = {
    isAuthenticated: false,
    authenticate(cb) {
        Auth.SetUser(cb);
        Auth.isAuthenticated = true;
    },
    GetUser() {
        return JSON.parse(localStorage.getItem("user") || "null");
    },
    SetUser(newUser) {
        localStorage.setItem("user", JSON.stringify(newUser));
    },
    Check() {
        if (Auth.isAuthenticated) {
            return true;
        }
        if (localStorage.getItem("user") !== null) {
            return !Auth.GetUser().anonymous;
        }
        return false;
    },
    signout() {
        Auth.isAuthenticated = false;
        localStorage.removeItem("user");
    },
    SetPreference(key, value) {
        let preference = JSON.parse(localStorage.getItem("user_preference") || "{}");
        preference = preference == null ? {} : preference;
        preference[key] = value;
        localStorage.setItem("user_preference", JSON.stringify(preference));
    },
    GetPreference(key) {
        const preference = JSON.parse(localStorage.getItem("user_preference") || "{}");
        if (preference && preference[key]) {
            return preference[key];
        }
        return null;
    },
};
export default Auth;
