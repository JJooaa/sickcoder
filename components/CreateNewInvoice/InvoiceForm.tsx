import { Formik, Form, FormikHelpers } from "formik";
import Link from "next/link";
import DatePickerField from "./DatePicker";
import FormField from "./FormField";
import { useState } from "react";
import { FormValues } from "../../lib/interfaces";
import { initialValues } from "../../lib/form";

const InvoiceForm = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [datePicker, setDatePicker] = useState(false);

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

          {/* Sender Information*/}
          <FormField label="Street Address" value="senderAddress.street" />
          <div className="flex">
            <FormField label="City" value="senderAddress.city " />
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
            <FormField label="City" value="clientAddress.city " />
            <FormField label="Post Code" value="clientAddress.postCode" />
          </div>
          <FormField label="Country" value="clientAddress.country" />

          <br />

          <DatePickerField name="createdAt" />
          <FormField label="Payment Terms" value="paymentTerms" />
          <FormField label="Project Description" value="description" />

          <br />

          <h3 className="text-lg text-[#777F98] font-bold">Item List</h3>
        </Form>
      </Formik>
    </div>
  );
};

export default InvoiceForm;
