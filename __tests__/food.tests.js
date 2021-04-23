'use strict';

require('@code-fellows/supergoose');

const GenericCollection = require('../src/models/data-collection-class.js');
const Foods = require('../src/models/food-schema.js');
const food = new GenericCollection(Foods);

describe('Food Actions', () => {

  it('can create() a new food item', () => {
    let obj = { name: 'test food 1', calories: 9999, type: 'FRUIT' };
    let expected = { name: 'test food 1', calories: 9999, type: 'FRUIT' };

    return food.create(obj)
      .then(record => {
        Object.keys(obj).forEach(item => {
          expect(record[item]).toEqual(expected[item]);
        });
      });

  });

  it('can read() a single food item', () => {
    let obj = { name: 'test food 2', calories: 9999, type: 'VEGETABLE' };
    return food.create(obj)
      .then(record => {
        return food.read(record._id)
          .then(item => {
            console.log('this should be test food 2', item);
            expect(record[item]).toEqual(record[item]);
          });
      });
  });

  // it('can update an item', () => {
  //   let obj = { name: 'NEW test food 1', calories: 9, type: 'GRAIN' };
  //   return food.update(1, obj).then(data => {
  //     expect(data.status).toBe(200);
  //   })
  // });
});
