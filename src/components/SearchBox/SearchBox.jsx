import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";

function SearchBox() {
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <p>Find contacts by name or number</p>
      <input
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBox;
