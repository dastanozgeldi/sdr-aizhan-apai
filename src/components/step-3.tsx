import { useState } from "react";
import { useNavigate } from "react-router";

export const StepThree = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState<number | null>(null);

  const handleClick = () => {
    if (number === 341) {
      alert("Жарайсыз!");
      navigate("/step-final");
    } else {
      alert("Өтпеді, тағы жасап көріңіз.");
      setNumber(null);
    }
  };

  return (
    <>
      <p>Ладно, екі этаптан өттіңіз.</p>
      <p>Енді лафа бітті.</p>

      <div className="my-3 text-center">
        <p>Бұл этапта сізге жазуы ең нашар адам көмектеседі (Д****Н)</p>
        <p>Ол адамға +1 балл қосып берем деп, қол алыссаңыз</p>
        <p>Д****Н сізге құпия қағазды береді</p>
      </div>

      <div className="my-3 text-center">
        <p>құпия қағаздағы контентті decimal түрде енгізіңіз.</p>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="number"
          value={number || ""}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <button onClick={handleClick}>тапсыру</button>
      </div>
    </>
  );
};
