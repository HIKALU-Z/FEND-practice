;(function(){
    var Cat = function(id){
        this.counter = 0;
        this.catID = 'cat-'+id;
        this.counterID = 'counter-'+id;
    }
    Cat.prototype.add = function(id){
        this.counter++;
        document.getElementById(id).innerText = this.counter;
    }
    Cat.prototype.onClicked = function(){
        var cat = document.getElementById(this.catID);
        id = this.catID;
        
        cat.addEventListener('click',function(){
            cat1.add()
        })
    }
    var cat1 = new Cat(01);
    var cat2 = new Cat(02);
    cat1.onClicked()
    // var counter2  = document.getElementById('cat-2');
    // counter1.addEventListener('click', function(){
    //     cat1.add('counter-1');
    //     //the element has been clicked... do stuff here
    // }, false);
})();