"use client";

const clientAppointments = [
  {
    id: 1,
    client_name: "Jane.D",
    client_phone: "01960685765",
    client_email: "admin@gmail.com",
    device: "Apple/iPhone_13Pro",
    repair_type: "Screen",
    date: "02/06/2026",
    slot_no: 1,
    start_time: "09:00",
  },
  {
    id: 2,
    client_name: "Jane.D",
    client_phone: "01960685765",
    client_email: "admin@gmail.com",
    device: "Apple/iPhone_13Pro",
    repair_type: "Screen",
    date: "02/06/2026",
    slot_no: 1,
    start_time: "09:00",
  },
  {
    id: 3,
    client_name: "Jane.D",
    client_phone: "01960685765",
    client_email: "admin@gmail.com",
    device: "Apple/iPhone_13Pro",
    repair_type: "Screen",
    date: "02/06/2026",
    slot_no: 1,
    start_time: "09:00",
  },
  {
    id: 4,
    client_name: "Jane.D",
    client_phone: "01960685765",
    client_email: "admin@gmail.com",
    device: "Apple/iPhone_13Pro",
    repair_type: "Screen",
    date: "02/06/2026",
    slot_no: 1,
    start_time: "09:00",
  },
  {
    id: 5,
    client_name: "Jane.D",
    client_phone: "01960685765",
    client_email: "admin@gmail.com",
    device: "Apple/iPhone_13Pro",
    repair_type: "Screen",
    date: "02/06/2026",
    slot_no: 1,
    start_time: "09:00",
  },
  {
    id: 6,
    client_name: "Jane.D",
    client_phone: "01960685765",
    client_email: "admin@gmail.com",
    device: "Apple/iPhone_13Pro",
    repair_type: "Screen",
    date: "02/06/2026",
    slot_no: 1,
    start_time: "09:00",
  },
];

export default function AppointmentTable() {
  return (
    <div className=" mt-8">
      <div className=" w-[375px] flex lg:w-full overflow-x-auto mx-auto rounded-xl border border-slate-700 bg-[#111B3B] ml-1 px-4">
        <table className=" w-full text-sm text-left ">
          <thead>
            <tr className="text-xs md:text-sm">
              <th className="px-4 py-3">Client Name</th>
              <th className="px-4 py-3">Client Phone</th>
              <th className="px-4 py-3">Client Email</th>
              <th className="px-4 py-3">Device</th>
              <th className="px-4 py-3">Repair Type</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Slot</th>
              <th className="px-4 py-3">Start Time</th>
            </tr>
          </thead>

          <tbody>
            {clientAppointments.map((item) => (
              <tr
                key={item.id}
                className="border-t border-blue-900 hover:bg-slate-800/50 transition"
              >
                <td className="px-4 text-sm py-3  text-blue-400">
                  {item.client_name}
                </td>
                <td className="px-4 text-sm py-3 text-[#CFCFCF]">
                  {item.client_phone}
                </td>
                <td className="px-4 text-sm py-3">{item.client_email}</td>
                <td className="px-4 text-sm py-3">{item.device}</td>
                <td className="px-4 text-sm py-3">{item.repair_type}</td>
                <td className="px-4 text-sm py-3 text-[#CFCFCF]">
                  {item.date}
                </td>
                <td className="px-4 text-sm py-3 text-[#CFCFCF]">
                  <span className="px-3 py-1  text-xs">{item.slot_no}</span>
                </td>
                <td className="px-4 text-sm py-3 text-[#CFCFCF]">
                  {item.start_time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
