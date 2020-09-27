
namespace.reg('WXZ.Menu');

WXZ.Menu = {
  addMenu(menuObj, options, parentKey) {
    const { key, name, icon, url, handleClick } = options;
    let result = menuObj.menuItems;
    if(parentKey) result = findParent(parentKey);
    result.push({
      key, name, icon, children: [], onClick: (router) => {
        if(url) router.push(url);
        else if(handleClick) handleClick();
      }
    });
    function findParent (parentKey, parentMenu = menuObj.menuItems) {
      let resultMenu = null;
      parentMenu.map(item => {
        if(item.key == parentKey) {
          resultMenu = item.children;
          return;
        }
        if(item.children.length != 0) {
          resultMenu = findParent(parentKey, item.children);
          return;
        }
      });
      if(resultMenu) {
        return resultMenu;
      }else {
        return parentMenu;
      }
    }
  }
}