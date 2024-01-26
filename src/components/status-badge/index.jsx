import React from "react";

const StatusBadge = ({ item }) => {
  return (
    <span
      className="badge"
      style={
        item && {
          backgroundColor: item.serviceRequest.status.color,
        }
      }
    >
      {item.serviceRequest.status.name}
    </span>
  );
};

export default StatusBadge;
