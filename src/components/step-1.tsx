import kvest1 from "@/assets/kvest-1.jpeg";
import { useState } from "react";
import { Link } from "react-router";

export const StepOne = () => {
  const [imageRevealed, setImageRevealed] = useState(false);
  return (
    <>
      <p>Ерте, ерте, ертеде,</p>
      <p>ешкі жүні бөртеде,</p>
      <p>Айжан апайдың оқушылары –</p>
      <p>Дастан мен Сашка бір сертификатпен суретке түседі.</p>

      {!imageRevealed ? (
        <button className="my-6" onClick={() => setImageRevealed(true)}>
          ол немене сертификат???
        </button>
      ) : (
        <>
          <img src={kvest1} alt="Сертификат" className="h-[150px] my-2" />
          <p>
            Осы сертификат сіздің подарка алуыңызға тікелей әсерін тигізеді.
          </p>
          <p>
            Оны сіз искусство блогы жағында таба аласыз
            <Link to="/step-2">...</Link>
          </p>
        </>
      )}
    </>
  );
};
