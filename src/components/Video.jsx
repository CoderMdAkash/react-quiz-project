import Classes from "../styles/Video.module.css";

// eslint-disable-next-line react/prop-types
export default function Video({ title, noq, id }) {
  return (
    <>
      <div className={Classes.video}>
        <img
          src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt={title}
        />
        <p>{title}</p>
        <div className={Classes.qmeta}>
          <p>{noq} Questions</p>
          <p>Total Point : {noq * 5}</p>
        </div>
      </div>
    </>
  );
}
