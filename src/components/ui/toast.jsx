
import React from 'react';

const ToastContext = React.createContext();

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  const toast = ({ title, description, variant = 'default', duration = 3000 }) => {
    const id = Date.now();
    setToasts(prevToasts => [...prevToasts, { id, title, description, variant }]);
    setTimeout(() => {
      setToasts(prevToasts => prevToasts.filter(t => t.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <Toaster toasts={toasts} />
    </ToastContext.Provider>
  );
};

export const Toaster = ({ toasts }) => {
  return (
    <div className="toaster-viewport">
      {toasts.map(({ id, title, description, variant }) => (
        <Toast key={id} variant={variant} title={title} description={description} />
      ))}
    </div>
  );
};

export const Toast = ({ title, description, variant }) => {
  let toastClass = "toast";
  if (variant === "destructive") {
    toastClass += " toast-destructive";
  }

  return (
    <div className={toastClass} role="alert">
      <div>
        {title && <div className="toast-title">{title}</div>}
        {description && <div className="toast-description">{description}</div>}
      </div>
    </div>
  );
};
