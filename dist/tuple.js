"use strict";
// tuple
let personT = ['Mario', 30, true];
// tuple example
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [94.1, 87.2];
function useCoords() {
    // get coords
    const lat = 100;
    const long = 60;
    return [lat, long];
}
const [lat, long] = useCoords();
// named tuples
let userT;
userT = ['person', 25];
console.log(userT[0]);
