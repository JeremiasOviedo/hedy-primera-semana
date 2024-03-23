import Hero from "./EventsHero";
import EventsList from "./EventsList";

const Events = () => {
  return (
    <div className="flex flex-col gap-4 px-96 py-24 h-screen bg-gradient-to-b from-violet-500 to-violet-600">
      <Hero />
      <EventsList />
    </div>
  );
};
export default Events;
