import "./Status.css";

const Status = () => {
  return (
    <section className="status-section">
      <h1 className="status-title">Title Placeholder</h1>
      <h2 className="status-type">Type Placeholder</h2>
      <div className="status-view">
        <img src="/statusError.svg" alt="Red circle error" />
        <h2 className="status-state">Status Placeholder</h2>
      </div>
      <button>View</button>
    </section>
  );
};

export default Status;
