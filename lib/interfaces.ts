export interface FormValues {
  createdAt: string;
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
}
