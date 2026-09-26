import React from 'react';

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-spinner loading-xs"></span>
      <span className="loading loading-spinner loading-sm"></span>
      <span className="loading loading-spinner loading-md"></span>
    </div>
  );
};

export default loading;
