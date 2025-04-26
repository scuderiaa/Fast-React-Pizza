import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { setUserName } = useOutletContext();
  const [value, setValue] = useState("");

  const handleChangeValue = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleStartOrder = () => {
    setUserName(value); // Met à jour le nom seulement quand on commence la commande
    navigate("/ordering");
  };

  return (
    <div className="overflow-auto">
      <main className="max-w-3xl mx-auto">
        <div className="px-4 my-10 text-center sm:my-16 font-roboto text-stone-700">
          <h1 className="text-3xl font-semibold ">
            The best pizza.
            <span className="text-yellow-500 block">
              Straight out of the oven, straight to you.
            </span>
          </h1>

          <p className="mt-9">
            👋 Welcome! Please start by telling us your name:
          </p>
          <input
            className="border-1 p-6 w-[40%] h-10 transition-all duration-300 text-sm focus:outline-none focus:ring focus:ring-yellow-300 rounded-full my-5"
            type="text"
            placeholder="Your full name"
            onChange={handleChangeValue}
            value={value}
          />
          {value && (
            <div className="flex justify-center items-center mt-4 ">
              <button
                onClick={handleStartOrder}
                className="uppercase bg-yellow-300 rounded-full px-3 py-4"
              >
                Start Ordering
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
