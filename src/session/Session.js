import React from "react";
import { minutesToDuration , secondsToDuration} from "../utils/duration/index"

const Session = ({ session, focusDuration, breakDuration }) => {
  // check if the session is active
    if(!session) return null;

  // set the duration
    let duration = "";
    if(session.label === "Focusing"){
        duration =focusDuration;
    }else{
        duration = breakDuration;
    };


    // aria rate value
    const ariaValue = (1-session.timeRemaining/(duration*60))*100;


    return (
        <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session.label} for {minutesToDuration(duration)} minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={ariaValue} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${ariaValue}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Session;