import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FormikHelpers,
  validateYupSchema,
} from "formik";
import Link from "next/link";
import FormField from "./FormField";

interface FormValues {
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

const initialValues = {
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  description: "",
  paymentTerms: 0,
  clientName: "",
  clientEmail: "",
  status: "",
};

const InvoiceForm = () => {
  return (
    <div className="px-6 py-8 text-xs">
      <Link href="/">Go Back</Link>
      <Formik
        initialValues={initialValues}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          setSubmitting(false);
          console.log(values);
        }}
      >
        <Form>
          <br />
          <h1 className="text-2xl font-bold">New Invoice</h1>
          <br />
          <h2 className="text-[#7C5DFA] font-bold">Bill From</h2>
          <br />

          <FormField label="Street Address" value="senderAddress.street" />
          <div className="flex">
            <FormField label="City" value="senderAddress.city " />
            <FormField label="Post Code" value="senderAddress.postCode" />
          </div>
          <FormField label="Country" value="senderAddress.country" />

          <br />

          <h2 className="text-[#7C5DFA] font-bold">Bill To</h2>
          <br />

          <FormField label="Client's Name" value="clientName" />
          <FormField label="Client's Email" value="clientEmail" />
          <FormField label="Street Address" value="clientAddress.street" />
          <div className="flex">
            <FormField label="City" value="clientAddress.city " />
            <FormField label="Post Code" value="clientAddress.postCode" />
          </div>
          <FormField label="Country" value="clientAddress.country" />
        </Form>
      </Formik>
    </div>
  );
};

export default InvoiceForm;
