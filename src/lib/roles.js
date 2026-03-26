export function hasRole(user, role) {
return user?.roles?.includes(role);
}

export function isAdmin(user) {
return hasRole(user, "Admin");
}

export function isSupport(user) {
return hasRole(user, "Support");
}

export function isEmployee(user) {
return hasRole(user, "Employee");
}
export function canAccessSupport(user) {
return isSupport(user) || isAdmin(user);
}

export function canAccessAdmin(user) {
return isAdmin(user);
}
