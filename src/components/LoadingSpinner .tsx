import React from "react";
export const LoadingSpinner = () => {
  return (
    <div
      className="spinner-border text-danger d-flex text-center items-center justify-content-center"
      role="status"
    >
      <span className="sr-only flex justify-center text-center">
        Loading...
      </span>
    </div>
  );
};
