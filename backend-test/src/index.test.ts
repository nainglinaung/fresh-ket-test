
import { orderItem } from ".";


describe("orderItem test", () => {
    it('expect total price to be 120 without discount', () => {
        expect(orderItem({items:["red","green","blue"]})).toBe(120)
    })

    it('expect total price to be 108 with 10% discount', () => {
        expect(orderItem({discountCard:true, items:["red","green","blue"]})).toBe(108)
    })

    it('expect total price to be 275.5 with 5% discount', () => {
        expect(orderItem({discountCard:false, items:["red","orange","orange"]})).toBe(275.5)
    })

    it('expect total price to be 246.5 with 15% discount', () => {
        expect(orderItem({discountCard:true, items:["red","orange","orange"]})).toBe(246.5)
    })
})
