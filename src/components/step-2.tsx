import { useState } from "react";
import { useNavigate } from "react-router";
import kvest2 from "@/assets/kvest-2.png";

export const StepTwo = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState<string>("");

  const handleClick = () => {
    alert(
      "Не важно, главное чтобы ученик понимал алгоритм, не так ли? Любой ответ принимается."
    );
    navigate("/step-3");
  };

  return (
    <>
      <img src={kvest2} alt="Kvest 2" className="h-[300px]" />

      <div className="my-3 text-center">
        <p>Найдите ошибку в коде</p>
      </div>

      <div className="flex items-center gap-3">
        <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <button onClick={handleClick}>тапсыру</button>
      </div>
    </>
  );
};
