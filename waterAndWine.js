/**
 * Created by stefanackermann on 09.02.16.
 */
var leftBarrel = [10,0]

var rightBarrel = [0,10]
var iterations = 20000

for(var i = 0; i<iterations;i++) {
    if(i%2){
        spillOver(leftBarrel, rightBarrel)
    }else{
        spillOver(rightBarrel, leftBarrel)
    }
}
console.log(leftBarrel, rightBarrel)

function getSpill(barrel) {
    var totalVolume = getTotalVolume(barrel)
    return [barrel[0] / totalVolume, barrel[1] / totalVolume]
}
function spillOver(barrel1, barrel2){
    var spill = getSpill(barrel1);
    barrel2[0] = barrel2[0]+spill[0]
    barrel2[1] = barrel2[1]+spill[1]
    barrel1[0] = barrel1[0]-spill[0]
    barrel1[1] = barrel1[1]-spill[1]
}
function getTotalVolume(barrel){
    return barrel.reduce(function(cur, prev){
        return prev+cur
    });
}