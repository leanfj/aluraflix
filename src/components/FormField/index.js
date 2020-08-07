import React from 'react';

function FormField({
  label, type, name, value, onChange,
}) {
  const htmlFor = `id_${name}`;

  return (
    <div>
      <label htmlFor={htmlFor}>
        {label}
        <input id={htmlFor} type={type} value={value} onChange={onChange} name={name} />
      </label>
    </div>
  );
}

export default FormField;
