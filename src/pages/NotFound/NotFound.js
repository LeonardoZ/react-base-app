import React from "react";
import { Link } from "react-router-dom";
import NavConstants from "../../navigation/Constants";

export default function NotFound() {
  return (
    <div>
      Page not found. Go to <Link to={NavConstants.app}>App</Link>
    </div>
  );
}
