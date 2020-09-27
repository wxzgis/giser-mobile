namespace.reg('WXZ.Router');

const findRouteByName = (routes, name) => {
  let targetRoute = null;
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    if(route.name == name) {
      targetRoute = route;
      break;
    } 
    targetRoute = findRouteByName(route.children, name);
    if(targetRoute) {
      break;
    }
  }
  return targetRoute;
}

WXZ.Router = {
  addChild (route, path, name, component) {
    route.children.push({
      path, name, component, children: []
    })
  },
  findRouteByName,
  addRedirct(route, redirect, path) {
    route.children.push({
      path, redirect
    })
  }
}
