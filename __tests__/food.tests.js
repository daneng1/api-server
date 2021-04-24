'use strict';

const supergoose = require('@code-fellows/supergoose');

const { server } = require('../src/server.js'); 
// const supertest = require('supertest'); 
const mockRequest = supergoose(server); 

const GenericCollection = require('../src/models/data-collection-class.js');
const Foods = require('../src/models/food-schema.js');
const food = new GenericCollection(Foods);

describe('Food Actions', () => {
  let obj = { name: 'test food 1', calories: 9999, type: 'FRUIT' };
  let expected = { name: 'test food 1', calories: 9999, type: 'FRUIT' };

  it('can create() a new food item', () => {
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

  it("Should update an item", async () => {
    let newRecord = { name: "Test food Update", calories: 4444 };
    let oldFood = await mockRequest.post("/food").send(obj);
    let id = oldFood.body._id;
    let res = await mockRequest.put(`/food/${id}`).send(newRecord);
    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual(newRecord.name);
  });

  it("Should Delete an item", async () => {
    let newRecord = await mockRequest.post("/food").send(obj);
    let id = newRecord.body._id;
    let res = await mockRequest.delete(`/food/${id}`);
    expect(res.status).toEqual(200);
    let getResponse = await mockRequest.get(`/food/${id}`);
    expect(getResponse.body).toEqual(null);
  });

});
