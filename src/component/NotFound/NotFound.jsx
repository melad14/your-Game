import React from "react";

import nooot from "../../images/notFound.png";

export default function NotFound () {
  return (
    <div className="text-center mx-auto">
      <img src={nooot} className="w-50" alt="not found" />
    </div>
  );
}
