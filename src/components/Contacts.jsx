import { Data } from "./ContactData";
import { useEffect, useState } from "react";

export default function Contacts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  }, []);

  return (
    <>
      <div className="m-10 p-4 bg-white rounded-md drop-shadow-lg">
        <div>
          <div className="">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-slate-300 rounded-md p-2 mb-3 md:flex md:justify-between"
                >
                  <div className="flex gap-2 justify-between mb-2 mg:flex md:gap-10">
                    <div>{item.id}.</div>
                    <div>{item.firstName}</div>
                    <div>{item.secondName}</div>
                    <div>{item.email}</div>
                    <div>{item.mobileNumber}</div>
                  </div>
                  <div className="flex justify-around md:flex gap-2">
                    <button className="border border-black rounded-md bg-blue-500 text-white w-20 py-1">
                      Edit
                    </button>
                    <button className="border border-black rounded-md bg-red-500 text-white w-20 py-1">
                      delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
