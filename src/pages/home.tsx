import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers/store";
import { setUser, logout } from "../reducers/slices/userslices";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  return (
    <>
      <h1>Bienvenido, {user.name || "Invitado"}</h1>
      <button
        onClick={() =>
          dispatch(setUser({ name: "Sebas", email: "sebas@example.com" }))
        }
      >
        Iniciar Sesión
      </button>
      <button onClick={() => dispatch(logout())}>Cerrar Sesión</button>
    </>
  );
};

export default Home;
