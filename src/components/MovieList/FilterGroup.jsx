const FilterGroup = ({ minrating, onRatingClick, ratings }) => {
  return (
    <ul className="movie-filter align-flex">
      {ratings.map((rate) => (
        <li
          className={
            minrating === rate
              ? "movie-filter-item active"
              : "movie-filter-item"
          }
          key={rate}
          onClick={() => {
            onRatingClick(rate); // Pass rate directly
          }}
        >
          {rate}+ star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
