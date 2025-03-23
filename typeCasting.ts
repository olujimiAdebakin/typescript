
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}

// userInputElement.value = 'Hi there!';


// index properties

interface ErrorContainer {
    [prop: string]: string;
}
 
const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
}