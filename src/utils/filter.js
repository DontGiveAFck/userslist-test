export function filterUserByName(users, name) {
    return users.filter(
        user => user.name.includes(name)
    );
}
