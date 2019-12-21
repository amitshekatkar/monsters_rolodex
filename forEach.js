let products = [
    {name: 'moble', type: 'electronics'},
    {name: 'car', type: 'vehicle'},
    {name: 'laptop', type: 'electronics'},
    {name: 'byke', type: 'vehicle'},
];

let vehicle = products.filter(prod => {
    if (prod.type === 'vehicle') {
        return prod.name
    }
})

console.log(vehicle)