// import { useState } from "react";

// import Snackbar from '@mui/material/Snackbar';

// import Alert from "./Alert";

// function useSnackBar() {
//   const [snackbar, setSnackbar] = useState({
//     isOpen: false,
//     type: "success",
//     message: "initialMessge",
//   });
//   const handleSnackbarClose = () =>
//     setSnackbar({
//       isOpen: false,
//     });

//   const info = (message) => {
//     setSnackbar({ isOpen: true, type: "info", message });
//   };

//   const error = (message) => {
//     setSnackbar({ isOpen: true, type: "error", message });
//   };
//   const success = (message) => {
//     setSnackbar({ isOpen: true, type: "success", message });
//   };

//   const SnackBar = (
//     <Snackbar
//       autoHideDuration={3000}
//       open={snackbar.isOpen}
//       onClose={handleSnackbarClose}
//       anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//     >
//       <Alert
//         type={snackbar.type}
//         message={snackbar.message}
//         onClose={handleSnackbarClose}
//       />
//     </Snackbar>
//   );
//   return { toastr: { info, error, success }, SnackBar };
// }
// export default useSnackBar;
