const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function totalBatteries() {
    return batteryBatches.reduce( (total, battery) => total + battery, 0 )
}
