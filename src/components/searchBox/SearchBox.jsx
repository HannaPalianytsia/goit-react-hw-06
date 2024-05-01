import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const onFilterContacts = (event) =>
    dispatch(changeFilter(event.target.value));

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={onFilterContacts}
      />
    </div>
  );
};

export default SearchBox;
