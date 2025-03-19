import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/contact/contactSlice";
import { RootState } from "../../store/store";
import "./ConfirmationModal.scss";

export const ConfirmationModal = () => {
  ReactModal.setAppElement("#root");
  const dispatch = useDispatch();
  const { isOpen, isError, message } = useSelector(
    (state: RootState) => state.contact
  );

  return (
    <ReactModal
      contentLabel="Email Confirmation"
      isOpen={isOpen}
      onRequestClose={() => dispatch(closeModal())}
      className="custom-modal"
      overlayClassName="custom-overlay"
    >
      <h1>{isError ? "Oops! Something went wrong." : "Message Sent!"}</h1>
      <p>{message}</p>
      <button onClick={() => dispatch(closeModal())}>Close</button>
    </ReactModal>
  );
};
