function array_diff(a, b) {
    var arr = [];
    for(var i = 0;i<a.length;i++){
        if(b.indexOf(a[i])<0){
            arr.push(a[i]);
        }
    }
    return arr;
}

console.log(array_diff([1, 2, 3], [2]))