/**
 * Created with JetBrains WebStorm.
 * User: zachjones
 * Date: 3/10/13
 * Time: 4:24 PM
 * To change this template use File | Settings | File Templates.
 */
var vows = require('vows'),
    assert = require('assert'),
    fact = require('./factoryfunction'),
    fact2 = require('./factoryfunction');

vows.describe('FactoryFunction').addBatch({
    'when requiring a factoryfunction':{
        topic: function(){return fact},
        'we get a function': function(topic){
            assert.isFunction(topic);
        },
        'all of its properties are undefined': function(topic){
           assert.isUndefined(topic.myname);
           assert.isUndefined(topic.date);
           assert.isUndefined(topic.add);
        },
        'when requiring the factory function a second time':{
            topic: function(){return fact2},
            'we get a function': function(topic){
                assert.isFunction(topic);
            },
            'all of its properties are also undefined': function(topic){
                assert.isUndefined(topic.myname);
                assert.isUndefined(topic.date);
                assert.isUndefined(topic.add);
            },
            'when executing the first factory function':{
                topic: function(){
                    return fact();
                },
                'we get an instance of the object returned by the factory function': function(newfact){
                    assert.isObject(newfact);
                },
                'its properties are defined as declared in the factory function': function(newfact){
                    assert.equal('test', newfact.myname);
                    assert.isString(newfact.date);
                    assert.isFunction(newfact.add);
                },
                'the orignal factory function remains unchanged': function(){
                    assert.isUndefined(fact.myname);
                    assert.isUndefined(fact.date);
                    assert.isUndefined(fact.add);
                },
                'the second factory function also remains unchanged': function(){
                    assert.isUndefined(fact2.myname);
                    assert.isUndefined(fact2.date);
                    assert.isUndefined(fact2.add);
                },
                'when modifying the first factory function':{
                    topic: function(){
                        fact.myname = 'test1';
                        return fact;
                    },
                    'it gains a name property': function(topic){
                        assert.equal('test1', topic.myname);
                        assert.equal('test1',fact.myname);
                    },
                    'the second factory function also changes': function(topic){
                       assert.equal(topic.myname, fact2.myname);
                    },
                    'the instance created from executing the first factory function':{
                        topic: function(topic, newfact){
                            return newfact;
                        },
                        'remains unchanged': function(topic, newfact){
                            assert.notEqual(fact, newfact);
                        }
                    }
                }

            }
        }
    }
}).run();