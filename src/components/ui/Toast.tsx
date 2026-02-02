import React, { useEffect, useState } from 'react';
import { CheckCircle, Loader2, XCircle } from 'lucide-react';
import clsx from 'clsx';

export type ToastType = 'success' | 'loading' | 'error';

interface ToastProps {
    message: string;
    type?: ToastType;
    isVisible: boolean;
    onClose?: () => void;
}

export function Toast({ message, type = 'success', isVisible, onClose }: ToastProps) {
    const [show, setShow] = useState(isVisible);

    useEffect(() => {
        setShow(isVisible);
    }, [isVisible]);

    // Auto-dismiss success/error messages
    useEffect(() => {
        if (show && type !== 'loading' && onClose) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [show, type, onClose]);

    if (!show) return null;

    return (
        <div className={clsx(
            "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border backdrop-blur-md transition-all duration-300 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            type === 'success' && "bg-white/95 border-lime-200 text-lime-800",
            type === 'loading' && "bg-white/95 border-lime-200 text-lime-800",
            type === 'error' && "bg-white/95 border-red-200 text-red-800"
        )}>
            {type === 'loading' && <Loader2 className="w-5 h-5 animate-spin text-lime-600" />}
            {type === 'success' && <CheckCircle className="w-5 h-5 text-lime-600" />}
            {type === 'error' && <XCircle className="w-5 h-5 text-red-600" />}

            <span className="text-sm font-medium">{message}</span>
        </div>
    );
}
