export function buildRoutePath(path) {
  // Alternatively: /:([\w]+)/ - \w - all characters, alphanumerics and underscore
  const routeParametersRegex = /:([a-zA-Z]+)/g
  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-zA-Z0-9\-_]+)')

  // /users?search=Diego
  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

  return pathRegex
}