class UserService {
    constructor() {
        this.users = new Map();
    }

    register(username, password) {
        if (this.users.has(username)) {
            throw new Error("User already exists");
        }
        this.users.set(username, password);
    }

    authenticate(username, password) {
        return this.users.get(username) === password;
    }
}

module.exports = UserService;