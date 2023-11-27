
import { ItemPrice, OrderDTO } from "./types";




const Item: ItemPrice[] = [{
    color: "red",
    price: 50,
}, {
    color: "green",
    price: 40,
}, {
    color: "blue",
    price: 30,
}, {
    color: "yellow",
    price: 50,
}, {
    color: "pink",
    price: 80,
}, {
    color: "purple",
    price: 90,
}, {
    color: "orange",
    price: 120,
}];



export const orderItem = (order: OrderDTO): number => {

    let totalPrice = 0; 
    let discount = 0;

    const mapItemsOrder = new Map();

    for (let item of order.items) {

        const mapItem = mapItemsOrder.get(item);
        mapItemsOrder.set(item, mapItem ? mapItem + 1 : 1);
                
        const matchItem = Item.find(({ color }) => color === item);

        if (matchItem) {
            totalPrice += matchItem?.price;
        }
    }

    const additionalDistcountThrehold = mapItemsOrder.get("orange") || mapItemsOrder.get("pink") || mapItemsOrder.get("green");

    if (additionalDistcountThrehold >= 2) {
        discount += 0.05;
    }
   
    if (order.discountCard) {
        discount += 0.1;
    }

    return totalPrice * (1 - discount)
}


orderItem({
    discountCard: true,
    items:["orange","green","blue","orange"]
});