import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { Contact, Footer, Header, Hobbies, Skills } from "./Components";
import { ConfirmationModal } from "./Components/Contact/ConfirmationModal";
import { closeDropdown } from "./features/dropdown/dropdownSlice";
import { RootState } from "./store/store";
import { About } from "./Components/About/About";

export const App = () => {
  const isOpen = useSelector((state: RootState) => state.dropdown.isOpen);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <Header />
      <About />
      <Skills />
      <Contact />
      <Hobbies />
      <Footer />
      {isOpen && (
        <div
          className="dropdown-backdrop"
          onClick={() => dispatch(closeDropdown())}
        />
      )}
      <ConfirmationModal />
    </div>
  );
};
