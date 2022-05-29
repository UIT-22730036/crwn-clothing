import "./Button.scss";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button
      disabled={isLoading}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {isLoading ? (
        <div className="spinner-overlay">
          <div className="spinner-container"></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
