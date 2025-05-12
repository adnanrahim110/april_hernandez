import React from "react";

const TextField = ({ formData, field, errors, onChange }) => {
  return (
    <p
      className={`-mx-[5px] px-[5px] mb-8 relative ${
        field.half ? "w-full lg:w-1/2" : "w-full"
      }`}
    >
      <label htmlFor={field.name}>
        {field.label}{" "}
        {field.required && <span className="text-red-500">*</span>}
      </label>
      <span className="block">
        <input
          type={field.type}
          value={formData[field.name]}
          name={field.name}
          onChange={onChange}
          placeholder={field.placeholder}
        />
      </span>
      {errors[field.name] && (
        <small
          className={`text-red-500 pl-2.5 text-xs font-medium ${
            field.double ? "relative" : "absolute top-full left-0"
          }`}
        >
          {errors[field.name]}
        </small>
      )}
      {field.isDouble && (
        <span className="mt-1.5 block">
          <input
            type={field.type}
            name={field.double?.name}
            value={field.double?.dvalue}
            onChange={onChange}
            placeholder={field.double?.placeholder}
          />
        </span>
      )}
    </p>
  );
};

export default TextField;
