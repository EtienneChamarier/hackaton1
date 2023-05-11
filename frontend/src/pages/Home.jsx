/* eslint-disable import/no-extraneous-dependencies */
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate("/0")}>
      POET
    </button>
  );
}
