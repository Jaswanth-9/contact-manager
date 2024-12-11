export default function Header() {
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
            />
          </div>
          <div className="flex flex-col max-w-80">
            <label for="LastName" className="font-semibold">
              Last Name
            </label>
            <input
              type="text"
              id="LastName"
              placeholder="K"
              class="border border-black p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col max-w-80">
            <label for="EmailID" className="font-semibold">
              Email ID
            </label>
            <input
              type="email"
              id="EmailID"
              placeholder="johnk@gmail.com"
              class="border border-black p-1 rounded-md"
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
            />
          </div>
        </div>
        <div className="flex justify-around px-20">
          <button className="border border-black rounded-md bg-blue-500 text-white w-20 py-1">
            Save
          </button>
          <button className="border border-black rounded-md bg-red-500 text-white w-20 py-1">
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
