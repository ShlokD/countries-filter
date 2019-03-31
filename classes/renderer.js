'use strict';

import Filter from './filter.js';
import debounce from '../utils/index.js';
import countries from '../data.js'

export default class {
  constructor() {
    this.filter = new Filter(countries.map(country => country.name));

    this.app = document.querySelector('#app');
    this.filterInput = document.querySelector("#countryname");
    this.countryData = this.filter.getData();

    this.filterCountries = this.filterCountries.bind(this);
    this.filterInput.addEventListener('input', debounce(this.filterCountries, 200));
  }

  filterCountries(ev) {
    const text = ev.target.value.toLowerCase();
    if(!!text) {
      this.countryData = this.filter.filterDataBy(text);
    } else {
      this.countryData = this.filter.getData();
    }
    this.render();
  }


  render() {
    const fragment = new DocumentFragment();
    const uList = document.createElement('ul');

    this.countryData.forEach(country => {
      const listItem = document.createElement('li');
      listItem.textContent = country;
      uList.append(listItem);
    });

    fragment.append(uList);

    while(this.app.firstChild) {
      this.app.firstChild.remove();
    }


    this.app.append(fragment);
  }
}
