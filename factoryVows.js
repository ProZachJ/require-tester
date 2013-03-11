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
        topic: function(){return fact},
        'we get an object': function(topic){
            assert.isObject(topic);
        },
        'it has a name property': function(topic){
            assert.isString(topic.name)
        },
        'the name property equals "test"': function(topic){
            assert.equal(topic.name, 'test');
        },
        'when requiring a factory a second time':{
            topic: function(){return fact2},
            'we get another object': function(topic){
                assert.isObject(topic);
                assert.isObject(fact);
            },
            'both objects are the same': function(topic){
                assert.equal(fact, topic);
            },
            'modifing the first object included':{
                topic: function(){
                    fact.name = 'new name';
                    return fact.name
                },
                'also changes the second': function(topic){
                    assert.equal(topic, fact2.name);
                }
            }
        }
    }
}).run();