const EmptyList = () => {
  return (
    <div className="empty-topic-list">
      <label className="empty-topic-list-header">No topics Found!.</label>{" "}
      <label className="empty-topic-list-content">
        Please select the other search category.
      </label>
    </div>
  );
};

export default EmptyList;
