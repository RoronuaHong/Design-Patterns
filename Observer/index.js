/*订阅发布者模式*/
const Subscribe = function() {
    const _this = this;
    this.observers = [];

    return {
        //订阅
        subscribe(observer) {
            _this.observers.push(observer);
        },
        //取消订阅
        unsubscribe(observer) {
            const index = _this.observers.indexOf(observer);
            if(index > -1) {
                _this.observers[index].splice(index, 1);
            }
        },
        //触发
        trigger(observer) {
            const index = _this.observers.indexOf(observer);
            if(index > -1) {
                _this.observers[index].triggerfn(index);
            }
        },
        //触发所有
        triggerAll() {
            _this.observers.forEach((element, index) => {
                element.triggerfn(index);
            });
        }
    }
}

const Observer = function() {
    return {
        //执行事件
        triggerfn(index) {
            console.log(index);
        }
    }
}

const subscribes = new Subscribe();

const observer1 = new Observer();
const observer2 = new Observer();

subscribes.subscribe(observer1);
subscribes.subscribe(observer2);

subscribes.triggerAll();




