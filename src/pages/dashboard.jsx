import React, { useRef, useState } from "react";
import "../styles/dashboard.css";
import { Card, CardBody, Text, Box, useStatStyles } from "@chakra-ui/react";
import { BsAlarm } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { ReminderContext } from "../context";
import { useContext } from "react";
import auth from "../firebase";
import "../components/dashboard-card/dashboard-card.css";
import Empty from "../components/emptyComponent/Empty";

function Dashboard() {
  const ref = useRef();
  const scrollComponent = (e) => {
    e.current.scrollIntoView({ behavior: "smooth" });
  };
  const { alltask } = useContext(ReminderContext);
  const arr = [];
  const statusArr = [];
  const totaltaskTitle = [];
  {
    alltask.map((t) => {
      if (t.email === auth.currentUser.email) {
        totaltaskTitle.push(t);
      }
    });
  }

  {
    alltask.map((totalTask) => {
      if (totalTask.email === auth.currentUser.email) {
        arr.push(totalTask.title);
      }
      if (totalTask.email === auth.currentUser.email) {
        if (totalTask.status) {
          statusArr.push(totalTask.status);
        }
      }
    });
  }
  const [showAll, setShowAll] = useState(true);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showPending, setShowPending] = useState(false);

  const showAllTask = () => {
    setShowAll(true);
    setShowCompleted(false);
    setShowPending(false);
  };

  const showCompletedTask = () => {
    setShowAll(false);

    setShowPending(false);
    setShowCompleted(true);
  };

  const showPendingTask = () => {
    setShowAll(false);
    setShowCompleted(false);
    setShowPending(true);
  };
  return (
    <>
      <div className="dashboard-parent-container">
        <div className="dashboard-container">
          {/* <div className="all-task-wrapper"> */}
          {/* card  */}
          <div
            className="dashboard-card-body"
            onClick={() => {
              showAllTask();
              scrollComponent(ref);
            }}
          >
            <div className="dashboard-card-left">
              <div className="field-title">Total Task</div>
              <div className="fiend-count-task">{arr.length}</div>
            </div>
            <div className="dashboard-card-right">
              <div className="dashboard-card-logo">
                <MdPendingActions />
              </div>
            </div>
          </div>

          {/* all task list  */}

          {/* </div> */}

          {/* <div className="completed-task-wrapper"> */}
          <div
            className="dashboard-card-body"
            onClick={() => {
              showCompletedTask();
              scrollComponent(ref);
            }}
          >
            <div className="dashboard-card-left">
              <div className="field-title">Completed</div>
              <div className="fiend-count-task">{statusArr.length}</div>
            </div>
            <div className="dashboard-card-right">
              <div className="dashboard-card-logo">
                <AiOutlineFileDone />
              </div>
            </div>
          </div>

          {/* </div> */}

          {/* <div className="pending-task-wrapper"> */}
          <div
            className="dashboard-card-body"
            onClick={() => {
              showPendingTask();
              scrollComponent(ref);
            }}
          >
            <div className="dashboard-card-left">
              <div className="field-title">Pending</div>
              <div className="fiend-count-task">
                {arr.length - statusArr.length}
              </div>
            </div>
            <div className="dashboard-card-right">
              <div className="dashboard-card-logo">
                <BsAlarm />
              </div>
            </div>
          </div>

          {/* </div> */}
        </div>

        <div className="task-list">
          {totaltaskTitle.length == 0 && <Empty />}
          {showAll && (
            <div className="all-task-list" ref={ref}>
              {totaltaskTitle.map((item, index) => {
                return (
                  <div className="single-card">
                    <div className="title-and-desc">
                      <div key={index} className="a-t-l-title">
                        {item.title}
                      </div>
                      <div key={index} className="a-t-l-description">
                        {item.description}
                      </div>
                    </div>
                    <div className="status-button">
                      {item.status ? (
                        <button className="completed-btn">Completed</button>
                      ) : (
                        <button className="pending-btn">Pending</button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {showCompleted && (
            <div className="completed-task-list" ref={ref}>
              {totaltaskTitle.map((item, index) => {
                if (item.status) {
                  return (
                    <div className="single-card">
                      <div className="title-and-desc">
                        <div key={index} className="a-t-l-title">
                          {item.title}
                        </div>
                        <div key={index} className="a-t-l-description">
                          {item.description}
                        </div>
                      </div>
                      <div className="status-button">
                        <button className="completed-btn">Completed</button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}

          {showPending && (
            <div className="pending-task-list" ref={ref}>
              {totaltaskTitle.map((item, index) => {
                if (!item.status) {
                  return (
                    <div className="single-card">
                      <div className="title-and-desc">
                        <div key={index} className="a-t-l-title">
                          {item.title}
                        </div>
                        <div key={index} className="a-t-l-description">
                          {item.description}
                        </div>
                      </div>
                      <div className="status-button">
                        <button className="pending-btn">Pending</button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
