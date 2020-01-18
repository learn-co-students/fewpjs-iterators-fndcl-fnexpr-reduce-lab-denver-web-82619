const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function totalBatteries(batterBatches){
    let sum = batterBatches.reduce((total, num) => {
        return num + total
    }, 0)
    return sum
}   