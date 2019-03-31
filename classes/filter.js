'use strict';

export default class {
  constructor(data) {
    this.state = {
      data: data.slice()
    }
  }

  getData() {
    return this.state.data;
  }

  filterDataBy(name) {
    return this.state.data.filter(datum => datum.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}