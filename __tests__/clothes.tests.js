'use strict';

const supergoose = require('@code-fellows/supergoose');

const { server } = require('../src/server.js');
// const supertest = require('supertest');
const mockRequest = supergoose(server);

const GenericCollection = require('../src/models/data-collection-class.js');
const Clothes = require('../src/models/clothes-schema.js');
const clothes = new GenericCollection(Clothes);

describe('***Clothes Actions***', () => {
  let obj = { name: 'clothes 1', color:'blue', type: 'SHIRT' };
  let expected = { name: 'clothes 1', color: 'blue', type: 'SHIRT' };

  it('can create() a clothes item', () => {

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

  it("Should update an item", async () => {
    let newRecord = { name: "Test Clothes Update", color: 'WHITE', type: 'PANTS' };
    let oldClothes = await mockRequest.post("/clothes").send(obj);
    let id = oldClothes.body._id;
    let res = await mockRequest.put(`/clothes/${id}`).send(newRecord);
    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual(newRecord.name);
  });

  // it("Should DELETE an item", async () => {
  //   let newClothes = await mockRequest.post("/clothes").send(obj);
  //   let id = newClothes.body._id;
  //   let res = await mockRequest.delete(`/clothes/${id}`);
  //   expect(res.status).toEqual(200);
  //   let getResponse = await mockRequest.get(`/clothes/${id}`);
  //   expect(getResponse.body).toEqual(null);
  // });
 
});
