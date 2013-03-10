/**
 * Created with JetBrains WebStorm.
 * User: zachjones
 * Date: 3/10/13
 * Time: 1:03 PM
 * To change this template use File | Settings | File Templates.
 */

var vows = require('vows'),
    assert = require('assert'),
    fact = require('./factory');
    fact2 = require('./factory');

vows.describe('Factory').addBatch({
    'when requiring a factory':{
        topic: fact ,
        'we get an object': function(topic){
          assert.isObject(fact);
        }
    },
    'when requiring a factory twice':{
        topic: fact2,
        'we get another object': function(topic){
            assert.isObject(fact2);
            assert.isObject(fact);
        },
        'both objects are the same': function(topic){
            assert.equal(fact, fact2);
        }
    },
    'modifing the first object included':{
        topic: fact.name = 'newname',
        'also changes the second': function(topic){
            console.log(fact2.name);
            console.log(fact.name);
            assert.equal(fact.name, fact2.name);
        }
    }

}).run();