import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Booking = () => {
  return (
    <div id="book" className="max-w-[1140px] w-full mx-auto py-16 px-4">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="text-2xl font-bold">
            LUXURY INCLUDED VACATIONA FOR TWO PEOPLE
          </h2>
          <p>
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
          <div className="grid md:grid-cols-2 gap-8 py-16">
            <div className="flex flex-col lg:flex-row lg:items-start items-center">
              <button className="rounded-md m-3">
                <RiCustomerService2Fill size={50} />
              </button>
              <div className="text-center">
                <h2>LEADING SERVICE</h2>
                <p className="py-2">
                  ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start items-center">
              <button className="rounded-md m-3">
                <MdOutlineTravelExplore size={50} />
              </button>
              <div className="text-center">
                <h2>LEADING SERVICE</h2>
                <p className="py-2">
                  ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <div className="border text-center">
            <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
            <p className="py-4">12 HOURS LEFT</p>
            <p className="bg-gray-800 text-gray-200 py-2 m-3">
              BOOK NOW AND SAVE
            </p>
          </div>
          <form className="w-full">
            <div className="flex flex-col my-2">
              <label>Destination</label>
              <select className="border rounded-md p-2">
                <option>Grande Antigua</option>
                <option>Key West</option>
                <option>Maldives</option>
                <option>Cozumel</option>
              </select>
            </div>
            <div className="flex flex-col my-4">
              <label>Check-In</label>
              <input className="border rounded-md p-2" type="date" />
            </div>
            <div className="flex flex-col my-2">
              <label>Check-Out</label>
              <input className="border rounded-md p-2" type="date" />
            </div>
            <button className="w-full my-4">Rates & Availabilities</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
