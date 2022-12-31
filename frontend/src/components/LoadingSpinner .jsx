import React from "react";

export const LoadingSpinner = () => {
  return (
    <div
      class="spinner-border text-danger d-flex justify-content-center"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
};
