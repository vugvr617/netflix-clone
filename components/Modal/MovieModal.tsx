import { Modal } from "@mui/material";
import { useState } from "react";

const MovieModal = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return <Modal open={isOpen} onClose={handleClose}><div><p>Modal test</p></div></Modal>;
};

export default MovieModal;