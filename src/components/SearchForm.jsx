const SearchForm = () => {
  return (
    <>
      <form className="form mb-5" action="">
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="location"
            id="location"
          />
        </div>
        <div className="mb-3 text-center">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>
    </>
  );
};
export default SearchForm;
