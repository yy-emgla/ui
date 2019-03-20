/*
*  format时间 Y年 M月 d日 h时 m分 s秒 q季度 S毫秒
*/
const formatDate = (date, fmt = 'yyyy-MM-dd') => {
  let fmtStr = fmt;
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S+': date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmtStr = fmtStr.replace(RegExp.$1,
      (date.getFullYear().toString())
        .substr(4 - RegExp.$1.length));
  }
  Object.keys(o).forEach((k) => {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmtStr = fmtStr.replace(RegExp.$1,
        (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr(o[k]).length.toString()));
    }
  });
  return fmt;
};
const isLeapYear = year => (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
export default {
  format: formatDate,
  isleapyear: isLeapYear,
};

