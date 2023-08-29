import React from "react";
import "./dashboard-card.css";
import { MdAssignmentAdd } from "react-icons/md";

function DashboardCard() {
  return (
    <>
      <div className="dashboard-card-body">
        <div className="dashboard-card-left">
          <div className="field-title">Assigned</div>
          <div className="fiend-count-task">5</div>
        </div>
        <div className="dashboard-card-right">
          <div className="dashboard-card-logo">
            <MdAssignmentAdd />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardCard;
