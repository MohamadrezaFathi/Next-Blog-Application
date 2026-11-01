import useOutsideClick from "@/hook/useOutsideClick";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { createPortal } from "react-dom";

function Modal({ open, onClose, title, children, description = "" }) {
  const ref = useOutsideClick(onClose);

  return (
    open &&
    createPortal(
      <div
        className="fixed inset-0 z-50 flex items-center justify-center
        bg-primary-900/30 backdrop-blur-sm p-4
        transition-all duration-300"
      >
        <div
          ref={ref}
          className="w-full md:max-w-lg max-h-[calc(100vh-2rem)]
          overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl
          ring-1 ring-primary-900/10
          animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-secondary-100 pb-4 mb-5">
            <div>
              <p className="text-secondary-800 font-bold text-lg">
                {title}
              </p>

              {description && (
                <p className="mt-1 text-secondary-400 text-sm">
                  {description}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center rounded-xl
              p-2 text-secondary-500 transition-colors
              hover:bg-primary-900/10 hover:text-primary-900"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {children}
        </div>
      </div>,
      document.body
    )
  );
}

export default Modal;