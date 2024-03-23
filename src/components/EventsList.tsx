import eventsData from "../data/events.json";
import { Event } from "../types";

const EventsList = () => {
  return (
    <div className="size-full bg-gradient-to-b from-violet-100 to-violet-200 rounded-2xl shadow-md p-8">
      <ul className="flex flex-col gap-4">
        {eventsData.map((event: Event) => (
          <li
            key={event.id}
            className="bg-white pt-4 pb-2 px-6 flex flex-col shadow-lg gap-2"
          >
            <p className="self-end bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-600 h-12 p-3 rounded-full shadow-lg text-white font-bold ">
              {event.fecha}
            </p>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 h-12">
              {event.titulo}
            </h1>
            <p className="font-sans text-justify text-lg text-gray-600 py-3">{event.descripcion}</p>
            <p className="self-end font-serif font-thin italic text-gray-600 mt-2">
              {event.ubicacion}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsList;
