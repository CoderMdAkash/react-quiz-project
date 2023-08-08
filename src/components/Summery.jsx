import image from "../assets/images/success.png";
import Classes from "../styles/Summery.module.css";

export default function Summery() {
  return (
    <>
      <div className={Classes.summary}>
        <div className={Classes.point}>
          <p className={Classes.score}>
            Your score is <br />5 out of 10
          </p>
        </div>

        <div className={Classes.badge}>
          <img src={image} alt="Success" />
        </div>
      </div>
    </>
  );
}
