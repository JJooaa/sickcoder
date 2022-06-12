import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormikContext } from "formik";
import { useState } from "react";
import calendarIcon from "../../public/assets/icon-calendar.svg";

const DatePickerField = ({ name }: { name: string }) => {
  const { setFieldValue } = useFormikContext();
  const [startDate, setStartDate] = useState<Date>(new Date()); // this is visual

  const handleOnChange = (val: Date) => {
    setFieldValue(name, val);
    setStartDate(val);
  };

  return (
    <>
      <label htmlFor={name} className="text-[#7E88C3]">
        Invoice Date
      </label>
      <DatePicker
        className="block border border-[#DFE3FA] h-12 w-full rounded-[4px] active:outline outline-[#9277FF] px-5 font-bold"
        selected={startDate}
        dateFormat="dd MMMM yyyy"
        onChange={handleOnChange}
        name="value"
      />
    </>
  );
};

export default DatePickerField;
