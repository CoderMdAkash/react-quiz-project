import classes from "../styles/Illustration.module.css";

// eslint-disable-next-line react/prop-types
export default function Illustration({ image }) {
  return (
    <>
      <div className={classes.illustration}>
        <img src={image} alt="Signup" />
      </div>
    </>
  );
}
