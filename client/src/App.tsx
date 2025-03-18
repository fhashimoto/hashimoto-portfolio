import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { Footer, Header, Hero } from "./Components";
import { closeDropdown } from "./features/dropdown/dropdownSlice";
import { RootState } from "./store/store";

export const App = () => {
  const isOpen = useSelector((state: RootState) => state.dropdown.isOpen);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <Hero />
      <Footer />
      {isOpen && (
        <div
          className="dropdown-backdrop"
          onClick={() => dispatch(closeDropdown())}
        />
      )}
    </div>
  );
};
