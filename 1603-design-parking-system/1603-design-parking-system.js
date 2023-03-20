/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.availableSlots = {
        1:big,
        2:medium,
        3:small
    };
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    return this.availableSlots[carType] < 1 ? false : !!(this.availableSlots[carType]--)
};

// ParkingSystem.prototype.addCar = function(carType) {
//     if ( this.availableSlots[carType] < 1 ) return false
//     this.availableSlots[carType] -= 1
//     return true
// };

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */