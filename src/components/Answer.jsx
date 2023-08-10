import { Fragment } from "react";
import Classes from "../styles/Answer.module.css";
import Checkbox from "./Checkbox";

// eslint-disable-next-line react/prop-types
export default function Answer({ options = [], handleChange, input }) {
  return (
    <>
      <div className={Classes.answers}>
        {options.map((option, index) => (
          // eslint-disable-next-line react/jsx-key, react/jsx-no-undef
          <Fragment key={index}>
            {input ? (
              <Checkbox
                type="checkbox"
                text={option.title}
                className={Classes.answer}
                value={index}
                checked={option.checked}
                onChange={(e) => handleChange(e, index)}
              />
            ) : (
              <Checkbox
                disabled
                type="checkbox"
                text={option.title}
                className={`${Classes.answer} ${
                  option.correct
                    ? Classes.correct
                    : option.checked
                    ? Classes.wrong
                    : null
                }`}
                defaultChecked={option.checked}
              />
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
}
