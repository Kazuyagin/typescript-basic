// tuple

let personT: [string, number, boolean] = ['Mario', 30, true];

// tuple example

let hsla: [number, string, string, number]
hsla = [200, '100%', '50%', 1]

let xy: [number, number]
xy = [94.1, 87.2]

function useCoords(): [number, number] {
    // get coords
    const lat = 100;
    const long = 60;
    return [lat, long]
}

const[lat, long] = useCoords();

// named tuples

let userT: [name: string, age: number];

userT = ['person', 25];

console.log(userT[0]);