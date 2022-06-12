import { Field, ErrorMessage } from "formik";

interface Props {
  label: string;
  value: string;
}

const FormField = ({ label, value }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label htmlFor={value} className="text-[#7E88C3]">
          {label}
        </label>
        <ErrorMessage name={value} />
      </div>
      <Field
        name={value}
        className="block border border-[#DFE3FA] h-12 w-full rounded-[4px] active:outline outline-[#9277FF] px-5 font-bold"
      />
    </div>
  );
};

export default FormField;
