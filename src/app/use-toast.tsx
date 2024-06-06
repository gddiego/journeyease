import { createContext, useContext, useState, ReactNode } from "react";

type ToastContextType = {
  toast: (props: ToastProps) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

type ToastProps = {
  title: string;
  description: string;
  action?: ReactNode;
  variant?: "default" | "destructive";
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = (props: ToastProps) => {
    setToasts((prevToasts) => [...prevToasts, props]);
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t !== props));
    }, 5000);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-0 right-0 p-4 space-y-4">
        {toasts.map((toast, index) => (
          <div key={index} className={`toast ${toast.variant === "destructive" ? "bg-red-600" : "bg-green-600"} text-white p-4 rounded-md shadow-md`}>
            <div className="toast-header font-bold">{toast.title}</div>
            <div className="toast-body">{toast.description}</div>
            {toast.action && <div className="mt-2">{toast.action}</div>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
