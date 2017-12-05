/**
 * @description 订阅发布者模式
 * @author slim。
 * @date 2017.12.5
 */
var Pubsub = {};

;(function(O) {

    let observers = [],
    observerId = 0;

    O.subscribe = function(topic, func) {
        observers[topic].push({
            id: observerId,
            callback: func
        });

        observerId++;

        return observerId;
    }
        O.unsubscribe = function(topic, func) {
            const index = observers[topic].indexOf(func);

            if(~index) {
                observers[topic].splice(index, 1);
            }
        }
        O.publish = function(topic, func) {
            observers[topic].forEach((element, index) => {
                element[topic](func);
            });
        }
})(Pubsub);