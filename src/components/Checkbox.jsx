// eslint-disable-next-line react/prop-types
export default function Checkbox({ className, text, ...rest }) {
  return (
    <>
      <label className={className}>
        <input {...rest} />
        <span> {text} </span>
      </label>
    </>
  );
}
