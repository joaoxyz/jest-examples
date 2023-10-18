function forEach(items, func) {
    for (let i = 0; i < items.length; i++) {
      func(items[i]);
    }
}

module.exports = { forEach }