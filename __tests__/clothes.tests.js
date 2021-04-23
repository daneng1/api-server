'use strict';

const supergoose = require('@code-fellows/supergoose');

const GenericCollection = require('../src/models/data-collection-class.js');
const Clothes = require('../src/models/clothes-schema.js');
const clothes = new GenericCollection(Clothes);

describe('***Clothes Actions***', () => {

  it('can create() a clothes item', () => {
    let obj = { name: 'clothes 1', color:'blue', type: 'SHIRT' };
    let expected = { name: 'clothes 1', color: 'blue', type: 'SHIRT' };

    return clothes.create(obj)
      .then(record => {
        Object.keys(obj).forEach(item => {
          expect(record[item]).toEqual(expected[item]);
          console.log(record[item]);
        });
      });

  });

  it('can read() a single clothes item', () => {
    let obj = { name: 'clothes 2', color: 'RED', type: 'SHIRT' };
    return clothes.create(obj)
      .then(record => {
        return clothes.read(record._id)
          .then(item => {
            console.log('this should be test clothes 2', item);
            expect(record[item]).toEqual(record[item]);
          });
      });
  });

  // it('can update a clothes item', () => {
  //   let obj = { name: 'SHIRT', color: 'BLACK', type: 'SHIRT' };
  //   return clothes.read(obj)
  //     .then(record => {
  //       console.log(`line 41 ${record}`);
  //       return clothes.update(record._id, obj)
  //         .then(item => {
  //           console.log('this should be test clothes 2', item);
  //           expect(record[item]).toEqual(record[item]);
  //         });
  //     });
  // });
});
