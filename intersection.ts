
type Admin = {
    name: string;
    priviledges: string[];
};

type Employee = {
    name: string;
    startDatee: Date;
};

type ElevateEmployee = Admin & Employee;

const e1: ElevateEmployee = {
    name: 'Max',
    priviledges: ['create-server'],
    startDatee: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;