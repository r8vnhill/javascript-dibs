const UserService = require('./user-service.js');

describe('User Service', () => {
    let userService;

    beforeEach(() => {
        userService = new UserService();
    });

    describe('when registering a new user', () => {
        it('should add the user to the system', () => {
            userService.register('alice', 'password123');
            expect(userService.users.has('alice')).toBe(true);
        });
    });

    describe('when registering an existing user', () => {
        it('should throw an error', () => {
            userService.register('alice', 'password123');
            expect(() => userService.register('alice', 'newpassword'))
                .toThrow("User already exists");
        });
    });
});
