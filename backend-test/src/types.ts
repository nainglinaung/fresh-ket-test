
import {z} from "zod"


const colorSchema = z.enum(["red","green","blue","yellow","pink","purple","orange"])


export const itemSchema = z.object({
    color: colorSchema,
    price: z.number()
})


export const orderSchema = z.object({
    discountCard: z.boolean().optional(),
    items: z.array(colorSchema)
})

export type ItemPrice = z.infer<typeof itemSchema>;
export type OrderDTO = z.infer<typeof orderSchema>;