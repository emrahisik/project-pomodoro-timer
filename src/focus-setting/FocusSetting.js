import React from "react";
import { minutesToDuration } from "../utils/duration/index"



const FocusSetting = ({ session, focusDuration, setFocusDuration}) => {
    // Control and limit the focus time
    const focusTimeControl = (span) => setFocusDuration(() => Math.min(Math.max(focusDuration+span,5),60));
    return (
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* TODO: Update this text to display the current focus session duration */}
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={() => focusTimeControl(-5)}
              disabled={session}
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={() => focusTimeControl(5)}
              disabled={session}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default FocusSetting;