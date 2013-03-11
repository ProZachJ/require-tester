module.exports = function(){
    this.myname = 'test';
    this.date = new Date().toJSON();
    this.add = function(num1 , num2){
        console.log(num1+num2);
    };

    return this;
};