import { Data } from "./ContactData";
import { useEffect, useState } from "react";
import Contacts from "./Contacts";

export default function Header() {
  const [FirstName, setFirstName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [Email, setEmail] = useState("");
  const [MobileNumber, setMobileNumber] = useState();
  const [ID, setID] = useState();
  const [Update, setUpdate] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  }, []);

  const handleEdit = (ID) => {
    const dt = data.filter((item) => item.ID === ID);
    if (dt !== undefined) {
      setUpdate(true);
      setID(ID);
      setFirstName(dt[0].FirstName);
      setSecondName(dt[0].SecondName);
      setEmail(dt[0].Email);
      setMobileNumber(dt[0].MobileNumber);
    }
  };

  const handleDelete = (ID) => {
    if (ID > 0) {
      const dt = data.filter((item) => item.ID !== ID);
      setData(dt);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const dt = [...data];
    const newObj = {
      ID: Data.length + 1,
      FirstName: FirstName,
      SecondName: SecondName,
      Email: Email,
      MobileNumber: MobileNumber,
    };

    dt.push(newObj);
    setData(dt);
    handleClear();
  };

  const handleUpdate = () => {
    const index = data
      .map((item) => {
        return item.ID;
      })
      .indexOf(ID);

    const dt = [...data];
    dt[index].FirstName = FirstName;
    dt[index].SecondName = SecondName;
    dt[index].Email = Email;
    dt[index].MobileNumber = MobileNumber;

    setData(dt);
    handleClear();
  };

  const handleClear = () => {
    setFirstName("");
    setSecondName("");
    setEmail("");
    setMobileNumber("");
    setUpdate(false);
  };

  return (
    <>
      <div className="m-10 p-4 bg-white rounded-md drop-shadow-lg flex flex-col gap-3">
        <div className="flex flex-col gap-3 lg:flex lg:flex-row lg:justify-between">
          <div className="flex flex-col max-w-80">
            <label for="FirstName" className="font-semibold">
              First Name
            </label>
            <input
              type="text"
              id="FirstName"
              placeholder="John"
              class="border border-black p-1 rounded-md"
              onChange={(e) => setFirstName(e.target.value)}
              value={FirstName}
            />
          </div>
          <div className="flex flex-col max-w-80">
            <label for="SecondName" className="font-semibold">
              Second Name
            </label>
            <input
              type="text"
              id="SecondName"
              placeholder="K"
              class="border border-black p-1 rounded-md"
              onChange={(e) => setSecondName(e.target.value)}
              value={SecondName}
            />
          </div>
          <div className="flex flex-col max-w-80">
            <label for="Email" className="font-semibold">
              Email ID
            </label>
            <input
              type="email"
              id="Email"
              placeholder="johnk@gmail.com"
              class="border border-black p-1 rounded-md"
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
            />
          </div>
          <div className="flex flex-col max-w-80">
            <label for="MobileNumber" className="font-semibold">
              Mobile Number
            </label>
            <input
              type="tel"
              id="MobileNumber"
              placeholder="9876543210"
              class="border border-black p-1 rounded-md"
              onChange={(e) => setMobileNumber(e.target.value)}
              value={MobileNumber}
            />
          </div>
        </div>
        <div className="flex justify-around px-20">
          {!Update ? (
            <button
              onClick={(e) => handleSave(e)}
              className="border border-black rounded-md bg-blue-400 text-white w-20 py-1"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => handleUpdate()}
              className="border border-black rounded-md bg-blue-400 text-white w-20 py-1"
            >
              Update
            </button>
          )}

          <button
            onClick={() => handleClear()}
            className="border border-black rounded-md bg-red-400 text-white w-20 py-1"
          >
            Clear
          </button>
        </div>
      </div>
      <Contacts
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
}
