const FilterContact = ({ filter, hendelChange }) => {
  return (
    <>
      <label className="filterLabel">
        Find
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={hendelChange}
          className="inputFilter"
        />
      </label>
    </>
  );
};

export default FilterContact;
