console.log(Math.PI,2)

const MyMath = {
    PI:Math.PI,
    random:function(){
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val);
    }
}
console.log(MyMath.floor(3.5,6.6))