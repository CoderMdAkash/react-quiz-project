import Videos from "../components/Videos.jsx";
import Classes from "../styles/Video.module.css";

export default function Home() {
  return (
    <>
      <div className={Classes.videos}>
        <Videos />
      </div>
    </>
  );
}
