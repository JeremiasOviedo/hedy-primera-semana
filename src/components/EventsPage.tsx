import Header from "./EventsHeader";
import EventsList from "./EventsList";

const EventsPage = () => {
  return (
    <div className="flex flex-col gap-4 2xl:px-96 xl:px-44 lg:px-36 md:px-10 sm:px-10 px-4 py-24 h-full bg-gradient-to-b from-violet-500 to-violet-600">
      <Header />
      <EventsList />
    </div>
  );
};
export default EventsPage;
