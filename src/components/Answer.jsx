import Classes from "../styles/Answer.module.css";
import Checkbox from "./Checkbox";

// eslint-disable-next-line react/prop-types
export default function Answer({ options = [], handleChange }) {
  return (
    <>
      <div className={Classes.answers}>
        {options.map((option, index) => (
          // eslint-disable-next-line react/jsx-key, react/jsx-no-undef
          <Checkbox
            key={index}
            type="checkbox"
            text={option.title}
            className={Classes.answer}
            value={index}
            checked={option.checked}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>
    </>
  );
}
