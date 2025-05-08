import React from "react";
import Select2 from "../ui/Select2";

const SelectField = ({
  field,
  formData,
  stateOptions,
  countryOptions,
  errors,
  onChange,
}) => {
  const data = field.name === "state" ? stateOptions : countryOptions;
  return (
    <div
      className={`-mx-[5px] px-[5px] mb-8 relative ${
        field.half ? "w-1/2" : "w-full"
      }`}
    >
      <label htmlFor={field.name} className="block">
        {field.label}{" "}
        {field.required && <span className="text-red-500">*</span>}
      </label>
      <Select2
        form2
        id={field.name}
        name={field.name}
        data={data}
        value={formData[field.name]}
        placeholder={field.placeholder}
        allowClear
        onChange={(val) =>
          onChange({ target: { name: field.name, value: val } })
        }
      />
      {errors[field.name] && (
        <small className="text-red-500 pl-2.5 text-xs font-medium absolute left-0 top-full">
          {errors[field.name]}
        </small>
      )}
    </div>
  );
};

export default SelectField;
