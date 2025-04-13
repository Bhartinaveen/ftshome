import React, { useState } from "react";

const BookingForm = () => {
  const [location, setLocation] = useState("City-Name");
  const [checkIn, setCheckIn] = useState("Booking-Date");
  // const [checkOut, setCheckOut] = useState("2025-04-14");
  const [showModal, setShowModal] = useState(false);
  const [rooms, setRooms] = useState([{ guests: 1 }]);

  const getGuestSummary = () => {
    const totalGuests = rooms.reduce((sum, room) => sum + room.guests, 0);
    return `${rooms.length} Room${rooms.length > 1 ? "s" : ""}, ${totalGuests} Guest${totalGuests > 1 ? "s" : ""}`;
  };

  const handleAddRoom = () => setRooms([...rooms, { guests: 1 }]);

  const handleRemoveRoom = () => {
    if (rooms.length > 1) {
      setRooms(rooms.slice(0, -1));
    }
  };

  const handleGuestChange = (index, delta) => {
    const newRooms = [...rooms];
    newRooms[index].guests = Math.max(1, newRooms[index].guests + delta);
    setRooms(newRooms);
  };

  return (
    <div className="h-[20vh] bg-gradient-to-b from-gray-700 to-gray-900 flex flex-col items-center justify-center p-4 ">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 text-center">
        Book Your Stay
      </h2>

      <div className="flex flex-col sm:flex-row bg-white overflow-hidden shadow-lg max-w-4xl w-full">
        {/* Location Input */}
        <div className="flex items-center px-4 py-3 border-b sm:border-b-0 sm:border-r w-full sm:w-1/3">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full text-gray-800 font-medium focus:outline-none"
          />
        </div>

        {/* Date Range */}
        <div className="flex flex-col sm:flex-row items-center px-4 py-3 border-b sm:border-b-0 sm:border-r w-full sm:w-1/3">
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="text-gray-700 w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2 focus:outline-none"
          />
          {/* <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="text-gray-700 w-full sm:w-auto focus:outline-none"
          /> */}
        </div>

        {/* Guest Info */}
        <div
          className="flex items-center px-4 py-3 border-b sm:border-b-0 sm:border-r w-full sm:w-1/3 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <input
            type="text"
            value={getGuestSummary()}
            readOnly
            className="w-full text-gray-700 focus:outline-none cursor-pointer"
          />
        </div>

        {/* Search Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 w-full sm:w-auto">
          Search
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[300px] sm:w-[400px]">
            <h3 className="text-lg font-semibold mb-4">Rooms & Guests</h3>
            {rooms.map((room, index) => (
              <div key={index} className="flex justify-between items-center mb-4 border-b pb-2">
                <span>Room {index + 1}</span>
                <div className="flex items-center space-x-2">
                  <button
                    className="border px-2 rounded"
                    onClick={() => handleGuestChange(index, -1)}
                  >
                    −
                  </button>
                  <span>{room.guests}</span>
                  <button
                    className="border px-2 rounded"
                    onClick={() => handleGuestChange(index, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-4">
              <button onClick={handleRemoveRoom} className="text-red-500 text-sm">
                Delete Room
              </button>
              <button onClick={handleAddRoom} className="text-blue-500 text-sm">
                Add Room
              </button>
            </div>
            <div className="mt-4 text-right">
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
