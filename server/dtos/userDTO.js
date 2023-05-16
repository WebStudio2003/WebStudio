module.exports = class UserDTO {
    username;
    id;
    isActivated;

    constructor(model) {
        this.username = model.username;
        this.id = model._id;
        this.isActivated = model.isActivated;
    }
}