// Hoisting for arrow functions
// 1
c(); // reference error
const c = () => console.log('From c');
c(); // Hoisting is not applicable for arrow functions as they are stored in variables an during variabele hoisting only memory allocation is done.


d(); // 'From D'
function d() {
    console.log('From D');
}
d();// 'From D'