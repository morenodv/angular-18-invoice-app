import { Invoice } from "../models/invoice";


export const invoiceData: any = {
  id: 1,
  name: "Componentes de PC",
  client: {
    name: 'Andres',
    lastname:'Doe',
    address: {
      country: 'USA',
      city: 'Los Angeles',
      street: 'One Street',
      number: 15
    }
  },
  company:{
    name:'New Age',
    fiscalNumber: 1234567,
  },
  items: [
    {
      id: 1,
      product: 'CPU Intel i9',
      price: 599,
      quantity: 1
    },
    {
      id: 2,
      product: 'Corsair teclado',
      price: 339,
      quantity: 65
    },
    {
      id: 3,
      product: 'Monitor ASUS',
      price: 369,
      quantity: 12
    }
]


}
