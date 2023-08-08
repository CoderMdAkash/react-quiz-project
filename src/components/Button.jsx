import Classes from "../styles/Button.module.css";

// eslint-disable-next-line react/prop-types
export default function Button({ className, children, ...rest }) {
  return (
    <>
      <button className={`${Classes.button} ${className}`} {...rest}>
        {children}
      </button>
    </>
  );
}
