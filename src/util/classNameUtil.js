export const classNamePrefixer = prefix => names => {
  let str = `${prefix}`;
  let keys = names ? Object.keys(names) : [];
  for (var i = 0; i < keys.length; i++) {
    if (names[keys[i]]) {
      str += ` ${prefix}-${keys[i]}`;
    }
  }
  return str;
};
