// import ReactModal from "react-modal";

// const ErrorPopup = ({ isOpen, onClose }) => {
//   return (
//     <ReactModal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Error Popup"
//       style={{
//         overlay: {
//           backgroundColor: "rgba(0, 0, 0, 0.5)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         },
//         content: {
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundColor: "white",
//           padding: "2rem",
//           borderRadius: "8px",
//           width: "300px",
//           margin: "0 auto",
//           boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
//         },
//       }}
//     >
//       <h2 style={{ marginBottom: "1rem", color: "#e74c3c" }}>Error</h2>
//       <p style={{ marginBottom: "2rem", textAlign: "center" }}>Transaction failed</p>
//       <button
//         style={{
//           backgroundColor: "#e74c3c",
//           color: "white",
//           padding: "0.5rem 1rem",
//           border: "none",
//           borderRadius: "4px",
//           cursor: "pointer",
//         }}
//         onClick={onClose}
//       >
//         Close
//       </button>
//     </ReactModal>
//   );
// };

// export default ErrorPopup;


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
      <p style={{ marginBottom: "1rem" }}>Transaction Failed!!!!! </p>
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
