import TurfDetailsCard from "../Components/TurfDetailsCard";

const TurfDetails = () => {
  return (
    <div className="turf-details-page turf-list-container">
      <main className="turf-main-content">
        <section className="turf-cards-grid">
          <TurfDetailsCard />
        </section>
      </main>
    </div>
  );
};

export default TurfDetails;
