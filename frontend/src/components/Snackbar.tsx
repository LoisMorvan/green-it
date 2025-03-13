import "../styles/gestionImages.css";

type Props = {
  message: string | null;
  onClose: () => void;
};

const Snackbar = ({ message, onClose }: Props) => {
  if (!message) return null;

  return (
    <div className="snackbar" onAnimationEnd={onClose}>
      {message}
    </div>
  );
};

export default Snackbar;
