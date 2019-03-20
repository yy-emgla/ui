const Manager = class {
  constructor(data, count, fixedColumns) {
    this.data = data;
    this.count = count;
    if (fixedColumns) {
      this.fixedColumns = fixedColumns;
    }
  }

  static getPure(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  getChildren(value) {
    return this.data.filter(one => one.parent === value);
  }

  getFirstColumn() {
    return this.data.filter(one =>
      !one.parent || one.parent === 0 || one.parent === '0');
  }

  getColumns(value) {
    let columnValue = value;
    // check is data contains the values
    if (columnValue.length > 0) {
      const matchCount = Manager.getPure(this.data).filter(item =>
        Manager.getPure(columnValue).indexOf(item.value) > -1).length;
      if (matchCount < Manager.getPure(columnValue).length) {
        columnValue = [];
      }
    }
    const datas = [];
    const max = this.fixedColumns || 8;
    for (let i = 0; i < max; i += 1) {
      if (i === 0) {
        datas.push(this.getFirstColumn());
      } else if (!columnValue[i]) {
        if (typeof datas[i - 1][0] === 'undefined') {
          break;
        } else {
          const topValue = datas[i - 1][0].value;
          datas.push(this.getChildren(topValue));
        }
      } else {
        datas.push(this.getChildren(columnValue[i - 1]));
      }
    }
    const list = datas.filter(item => item.length > 0);
    // correct the column
    this.count = list.length;
    return list;
  }
};

export default Manager;
