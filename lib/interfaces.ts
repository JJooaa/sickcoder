export interface FormValues {
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  items: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
}
