const add_two = (a, b) => {
    return a + b;
};

const sub_two = (a, b) => {
    return a - b;
};

const mul_two=(a,b)=>{
    return a * b;
}
const div_two=(a,b)=>{
    return a /b;
}
// Export both functions
module.exports = {
    add_two,
    sub_two,
    mul_two,
    div_two
};
