

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Admin | Employee;  // `name` is now always available

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name); // ✅ Now, `name` always exists

    if ('priviledges' in emp) {
        console.log('Priviledges: ' + emp.priviledges);
    }

    if ('startDate' in emp) { // ✅ Correct casing of `startDate`
        console.log('Start Date: ' + emp.startDate);
    }
}

// Now this call works correctly:
printEmployeeInformation({ name: 'Manu', startDatee: new Date() });

class Car{
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...')
    }


    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount);
    }
}

type Vehiclee = Car | Truck;

const v1 = new Car();
const v2 = new Truck();


function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

