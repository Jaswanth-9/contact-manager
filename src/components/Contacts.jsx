export default function Contacts({ data, handleEdit, handleDelete }) {
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
                    <div>{index + 1}.</div>
                    <div>{item.FirstName}</div>
                    <div>{item.SecondName}</div>
                    <div>{item.Email}</div>
                    <div>{item.MobileNumber}</div>
                  </div>
                  <div className="flex justify-around md:flex gap-2">
                    <button
                      onClick={() => handleEdit(item.ID)}
                      className="border border-black rounded-md bg-blue-400 text-white w-20 py-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.ID)}
                      className="border border-black rounded-md bg-red-400 text-white w-20 py-1"
                    >
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
