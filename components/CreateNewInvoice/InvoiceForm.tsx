import { Formik, Form, FormikHelpers } from "formik";
import DatePickerField from "./DatePicker";
import FormField from "./FormField";
import { FormValues } from "../../lib/interfaces";
import { initialValues } from "../../lib/form";
import { useState } from "react";
import GoBack from "../GoBack";
import { useRouter } from "next/router";

const InvoiceForm = () => {
  const [numberOfItems, setNumberOfItems] = useState(1);
  const router = useRouter();

  return (
    <div className="text-xs">
      <div className="px-6 pt-8 ">
        <GoBack />
      </div>
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
          console.log(values);

          setSubmitting(false);
        }}
      >
        <Form>
          <div className="px-6 pb-8 ">
            <br />
            <h1 className="text-2xl font-bold">New Invoice</h1>
            <br />

            <h2 className="text-[#7C5DFA] font-bold">Bill From</h2>

            {/* Sender Information*/}
            <FormField label="Street Address" value="senderAddress.street" />
            <div className="flex">
              <FormField label="City" value="senderAddress.city" />
              <FormField label="Post Code" value="senderAddress.postCode" />
            </div>
            <FormField label="Country" value="senderAddress.country" />

            <br />
            <h3 className="text-[#7C5DFA] font-bold">Bill To</h3>

            {/* Client Information */}
            <FormField label="Client's Name" value="clientName" />
            <FormField label="Client's Email" value="clientEmail" />
            <FormField label="Street Address" value="clientAddress.street" />
            <div className="flex">
              <FormField label="City" value="clientAddress.city" />
              <FormField label="Post Code" value="clientAddress.postCode" />
            </div>
            <FormField label="Country" value="clientAddress.country" />

            {/* <DatePickerField name="createdAt" /> */}
            <FormField
              label="Payment Terms"
              value="paymentTerms"
              type="number"
            />
            <FormField label="Project Description" value="description" />

            <br />
            <h3 className="text-lg text-[#777F98] font-bold">Item List</h3>

            {/* Items  */}
            {Array.from(Array(numberOfItems)).map((_, index) => (
              <div className="flex flex-wrap" key={index}>
                <FormField label="Item Name" value={`items[${index}].name`} />
                <div className="flex">
                  <FormField
                    label="Qty."
                    value={`items[${index}].quantity`}
                    type="number"
                  />
                  <FormField
                    label="Price"
                    value={`items[${index}].price`}
                    type="number"
                  />
                  <FormField
                    label="Total"
                    value={`items[${index}].price`}
                    type="number"
                  />
                </div>
              </div>
            ))}

            {/* "footer" for buttons */}
            <br />
            <button
              onClick={() => setNumberOfItems((prev) => (prev += 1))}
              type="button"
              className="p-4 font-bold bg-[#F9FAFE] text-[#7E88C3] rounded-3xl w-full"
            >
              + Add New Item
            </button>
            <br />
          </div>

          <footer className="flex shadow-2xl shadow-black justify-evenly h-24 items-center">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="p-4 font-bold bg-[#F9FAFE] text-[#7E88C3] rounded-3xl"
            >
              Discard
            </button>
            <button
              type="submit"
              className="p-4 font-bold bg-[#373B53] text-[#888EB0] rounded-3xl"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="p-4 font-bold bg-[#7C5DFA] text-white rounded-3xl"
            >
              Save & Send
            </button>
          </footer>
        </Form>
      </Formik>
    </div>
  );
};

export default InvoiceForm;
