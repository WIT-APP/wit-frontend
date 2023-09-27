import { useParams } from "react-router-dom";

export default function LoginPage() {
  const param = useParams();
  console.log(param);
  return (
    <div>
      <h1>LoginPage</h1>
    </div>
  );
}
