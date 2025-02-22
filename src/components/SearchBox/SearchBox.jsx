import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBox;
