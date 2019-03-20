export default function (value, list, delimiter = ' ') {
  if (value && !list.length) {
    return '';
  }
  let rs = value.map((one, index) => {
    if (list.length && Object.prototype.toString.call(list[0]) === '[object Array]') {
      return list[index].find(item => item.value === one);
    }
    return list.find(item => item.value === one);
  });
  rs = rs.filter(one => typeof one !== 'undefined');
  return rs.map(one => one.name).join(delimiter).replace('--', '');
}

