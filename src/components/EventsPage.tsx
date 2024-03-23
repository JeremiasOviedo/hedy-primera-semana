import Header from "./EventsHeader";
import EventsList from "./EventsList";

const EventsPage = () => {
  return (
    <div className="flex flex-col gap-4 px-96 py-24 h-full bg-gradient-to-b from-violet-500 to-violet-600">
      <Header />
      <EventsList />
    </div>
  );
};
export default EventsPage;
