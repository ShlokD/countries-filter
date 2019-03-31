import Filter from '../../classes/filter.js';

describe("Filter Class", () => {
  let filter;
  let actual;
  let expected;
  
  const mockData = ["Apples", "Apricots", "Cherries"];

  beforeEach(() => {
    filter = new Filter(mockData);
  });


  test('it sets data', () => {
    expected = ["Apples", "Apricots", "Cherries"];
    actual  = filter.getData();

    expect(actual).toEqual(expected);
  })

  test('it filters data', () => {
    expected = ["Cherries"];
    actual  = filter.filterDataBy('Cherr');
    
    expect(actual).toEqual(expected);
  })

  test('it filters data in a case insensitive manner', () => {
    expected = ["Apples", "Apricots"];
    actual  = filter.filterDataBy('aP');
    
    expect(actual).toEqual(expected);
  })
});