export function dependencyKeyForEntry(repoFullName) {
  return `Entry(${repoFullName})`;
}

export function dependencyKeyForRepository(repoFullName) {
  return `Repository(${repoFullName})`;
}

export function dependencyKeyForUser(login) {
  return `User(${login})`;
}
