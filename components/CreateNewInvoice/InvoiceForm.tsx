import { Formik, Form, FormikHelpers } from "formik";
import Link from "next/link";
import DatePickerField from "./DatePicker";
import FormField from "./FormField";
import { FormValues } from "../../lib/interfaces";
import { initialValues } from "../../lib/form";
import { useState } from "react";

const InvoiceForm = () => {
  const [numberOfItems, setNumberOfItems] = useState(1);

  return (
    <div className="px-6 py-8 text-xs">
      <Link href="/">Go Back</Link>
      <Formik
        initialValues={initialValues}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          fetch("/api/invoice", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });
          setSubmitting(false);
        }}
      >
        <Form>
          <button onClick={() => console.log(initialValues)}>test here</button>
          <br />
          <h1 className="text-2xl font-bold">New Invoice</h1>
          <br />
          <h2 className="text-[#7C5DFA] font-bold">Bill From</h2>
          <br />

          {/* Sender Information*/}
          <FormField label="Street Address" value="senderAddress.street" />
          <div className="flex">
            <FormField label="City" value="senderAddress.city" />
            <FormField label="Post Code" value="senderAddress.postCode" />
          </div>
          <FormField label="Country" value="senderAddress.country" />

          <br />

          <h3 className="text-[#7C5DFA] font-bold">Bill To</h3>
          <br />

          {/* Client Information */}
          <FormField label="Client's Name" value="clientName" />
          <FormField label="Client's Email" value="clientEmail" />
          <FormField label="Street Address" value="clientAddress.street" />
          <div className="flex">
            <FormField label="City" value="clientAddress.city" />
            <FormField label="Post Code" value="clientAddress.postCode" />
          </div>
          <FormField label="Country" value="clientAddress.country" />

          <br />

          {/* <DatePickerField name="createdAt" /> */}
          <FormField label="Payment Terms" value="paymentTerms" type="number" />
          <FormField label="Project Description" value="description" />

          <br />
          <h3 className="text-lg text-[#777F98] font-bold">Item List</h3>

          {/* Items  */}
          {Array(numberOfItems).fill(
            <div className="flex flex-wrap">
              <FormField label="Item Name" value="items[0].name" />
              <div className="flex">
                <FormField
                  label="Qty."
                  value="items[0].quantity"
                  type="number"
                />
                <FormField label="Price" value="items[0].price" type="number" />
                <FormField label="Total" value="items[0].total" type="number" />
              </div>
            </div>
          )}

          {/* "footer" for buttons */}
          <button type="button">+ Add New Item</button>
          <button type="submit">Save & Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default InvoiceForm;
