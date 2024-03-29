function Input({
  label,
  type,
  name,
  placeholder,
  value,
  onChangeValue,
  className,
  required,
}) {
  return (
    <>
      <div className="flex flex-col gap-1 mb-2">
        <label className="font-bold text-base">{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChangeValue}
          required={required}
          className={
            "form-input border-2 border-stone-900 px-1 h-8" || className
          }
        />
      </div>
    </>
  );
}
export default Input;
