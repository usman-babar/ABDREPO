import ReactModal from "react-modal";

const ErrorPopup = ({ isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Error Popup"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          width: "300px",
          height: "200px",
          margin: "0 auto",
        },
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Error</h2>
      <p style={{ marginBottom: "1rem" }}>Username or password is incorrect.</p>
      <button
        onClick={onClose}
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          fontSize: "16px",
        }}
      >
        Close
      </button>
    </ReactModal>
  );
};

export default ErrorPopup;
