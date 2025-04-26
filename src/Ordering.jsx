import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Atom,Mosaic } from 'react-loading-indicators';
const Ordering = () => {
  const [pizza, setPizza] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = "https://react-fast-pizza-api.onrender.com/api/menu";
    const fetchPizza = async () => {
      const result = await axios.get(url);
      setPizza(result.data.data);
      setLoading(false);
    };
    fetchPizza();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen  ">
        <Mosaic color="#e6c717" size="large" text="" textColor="" />
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto  mt-2  ">
      {pizza.map((item) => {
        return (
          <div className="">
            <ul className=" divide-y divide-stone-200">
              <li className="flex gap-4 py-2 " key={item.name}>
                {item.soldOut ? (
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="size-24 grayscale"
                  />
                ) : (
                  <img src={item.imageUrl} alt="" className="size-24" />
                )}

                <div className="font-roboto mx-3 flex flex-col w-full">
                  <p className="font-semibold text-slate-700  mt-2  ">
                    {item.name}
                  </p>
                  <p className="capitalize text-stone-500 italic text-sm ">
                    {item.ingredients.join(",")}
                  </p>
                  <div className="flex mt-auto justify-between items-center  ">
                    {item.soldOut ? (
                      <p className="uppercase text-sm text-stone-500">
                        sold out
                      </p>
                    ) : (
                      <p>€{item.unitPrice}.00</p>
                    )}

                    <button className="uppercase text-xs font-semibold bg-yellow-300 text-stone-800 px-4 py-3 tracking-wide focus: inline-block rounded-full p-0.5 w-1/5 ">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Ordering