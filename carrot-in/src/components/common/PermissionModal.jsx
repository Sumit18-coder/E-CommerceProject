"use client";

import React, { useEffect, useState } from "react";

const PermissionModal = ({ onAllow }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const permissionAsked = localStorage.getItem("permissionAsked");
        if (!permissionAsked) {
            setOpen(true);
        }
    }, []);

    const allowLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                onAllow && onAllow(position.coords);
                localStorage.setItem("permissionAsked", "true");
                setOpen(false);
            },
            () => {
                localStorage.setItem("permissionAsked", "true");
                setOpen(false);
            }
        );

    };

    const deny = () => {
        localStorage.setItem("permissionAsked", "true");
        setOpen(false);
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-4">
                <h2 className="text-lg font-bold mb-2">Allow Location Access</h2>
                <p className="text-sm text-gray-600 mb-4">
                    Enable location to show faster delivery and nearby offers.
                </p>
                <div className="flex justify-end gap-3">
                    <button onClick={deny} className="px-4 py-2 text-sm border rounded-lg">
                        Not now
                    </button>
                    <button
                        onClick={allowLocation}
                        className="px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                    >
                        Allow
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PermissionModal;
