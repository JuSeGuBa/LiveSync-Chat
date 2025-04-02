import { useDispatch } from "react-redux";
import { setUser } from "../reducers/slices/userslices";
import "../styles/home.css";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="title">Welcome to Chat Live Sync</h1>
      <label onClick={() => dispatch(setUser({ name: "" }))}>
        Write your name
      </label>
    </>
  );
};

export default Home;
