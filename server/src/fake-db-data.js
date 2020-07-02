const pNames = ['Carbonara', 'Village', 'Pepperoni Tomatoes', 'Pepperoni Pepper', 'Cheesy', 'Ham and cheese', 'Sweet and Sour Chicken', 'Ham and mushrooms', 'Four seasons']

const pImages = [
    '/assets/images/p1.jpeg',
    '/assets/images/p2.jpeg',
    '/assets/images/p3.jpeg',
    '/assets/images/p4.jpeg',
    '/assets/images/p5.jpg',
    '/assets/images/p6.jpg',
    '/assets/images/p7.jpg',
    '/assets/images/p8.jpeg',
    '/assets/images/p9.jpg',
]

const pDescs = [
    'Bacon, cheddar and parmesan cheeses, mozzarella, cherry tomatoes, onions, garlic, cream sauce, Italian herbs',
    'Oven potatoes, pickles, chicken, ranch sauce, tomatoes, red onion, garlic, mozzarella, tomato sauce',
    'Piquant pepperoni, enlarged portion of mozzarella, tomatoes, tomato sauce',
    'Spicy pepperoni, larger portion of mozzarella, sweet pepper, tomato sauce',
    'Large portion of mozzarella, tomato sauce',
    'Ham, large portion of mozzarella, cream sauce',
    'Chicken, tomato sauce, mozzarella, sweet and sour sauce',
    'Ham, champignons, large portion of mozzarella, tomato sauce',
    'Enlarged portion of mozzarella, ham, spicy pepperoni, cheese cubes, tomatoes, champignons, tomato sauce, Italian herbs'
]

const pDollar = [
    '11.8',
    '13',
    '14.5',
    '12.7',
    '18.2',
    '15.6',
    '13.7',
    '16',
    '18',
]

const pEuro = [
    "10.5", 
    "11.6", 
    "12.9", 
    "11.3", 
    "16.2", 
    "13.9", 
    "12.2", 
    "14.2", 
    "16"
]

const dNames = [
    'Coffee Americano',
    'Coffee Flat White',
    'Cappuccino Coffee',
    'Coffee Nut Latte'
]

const dImages = [
    '/assets/images/d1.jpeg',
    '/assets/images/d2.jpeg',
    '/assets/images/d3.jpeg',
    '/assets/images/d4.jpeg',
]

const dDescs = [
    'Hot drink based on espresso, 0.4 L',
    'Hot drink based on a double serving of espresso with frothed milk, 0.2 L',
    'Hot drink based on espresso with frothed milk, 0.4 L',
    'Hot drink based on espresso with an increased portion of milk and nut syrup, 0.3 L',
]

const dDollar = [
    '1.4',
    '1.9',
    '2.1',
    '2.3'
]

const dEuro = [
    "1.2", 
    "1.7", 
    "1.9", 
    "2"
]

let idCounter = 0;

function ItemCreator (name, image, description, priceDollar, priceEuro) {
    this.id = idCounter++;
    this.name = name;
    this.image = image;
    this.description = description;
    this.priceDollar = priceDollar;
    this.priceEuro = priceEuro;
}

const pizzas = []

const drinks = []

for (let i=0; i<9; i++) {
    pizzas[i] = new ItemCreator(pNames[i], pImages[i], pDescs[i], pDollar[i], pEuro[i])

}
for (let i=0; i<4; i++) {
    drinks[i] = new ItemCreator(dNames[i], dImages[i], dDescs[i], dDollar[i], dEuro[i])
}



exports.pizzas = pizzas;
exports.drinks = drinks;