;(function(){
    var Cat = function(){
        this.counter = 0
    }
    Cat.prototype.add = function(){
        console.log('1')
    }
    var counter1  = document.getElementById('click-counter-1');
    var counter2  = document.getElementById('click-counter-2');
    counter1.addEventListener('click', function(){
        console.log('1')
        //the element has been clicked... do stuff here
    }, false);
    counter1.innerText = 1;
    counter2.innerText = 2;
})();