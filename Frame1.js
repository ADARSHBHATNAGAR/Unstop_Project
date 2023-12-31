import "./Frame1.css";
const Frame1 = ({ onClose }) => {
  return (
    <div className="frame-root">
      <div className="create-new-assessment-parent">
        <div className="create-new-assessment">Create new assessment</div>
        <img className="cut-icon" alt="" src="/cut.svg" />
      </div>
      <div className="frame-parent33">
        <div className="frame-parent34">
          <div className="name-of-assessment-wrapper">
            <div className="name-of-assessment">Name of assessment</div>
          </div>
          <div className="type-here-wrapper">
            <div className="name-of-assessment">Type Here</div>
          </div>
        </div>
        <div className="frame-parent34">
          <div className="name-of-assessment-wrapper">
            <div className="name-of-assessment">Purpose of the test is</div>
          </div>
          <div className="select-parent">
            <div className="name-of-assessment">Select</div>
            <img
              className="keyboard-arrow-down-icon"
              alt=""
              src="/keyboard-arrow-down.svg"
            />
          </div>
        </div>
        <div className="frame-parent34">
          <div className="name-of-assessment-wrapper">
            <div className="name-of-assessment">Description</div>
          </div>
          <div className="select-parent">
            <div className="name-of-assessment">Select</div>
            <img
              className="keyboard-arrow-down-icon"
              alt=""
              src="/keyboard-arrow-down1.svg"
            />
          </div>
        </div>
        <div className="frame-parent34">
          <div className="name-of-assessment-wrapper">
            <div className="name-of-assessment">Skills</div>
          </div>
          <div className="frame-parent38">
            <div className="frame-parent39">
              <div className="frame-parent40">
                <div className="frame-wrapper6">
                  <div className="uiux-and-design-parent">
                    <div className="name-of-assessment">UI/UX and Design</div>
                    <img className="close-icon" alt="" src="/close.svg" />
                  </div>
                </div>
                <div className="frame-wrapper6">
                  <div className="uiux-and-design-parent">
                    <div className="name-of-assessment">No of Question</div>
                    <img className="close-icon" alt="" src="/close.svg" />
                  </div>
                </div>
                <div className="frame-wrapper6">
                  <div className="uiux-and-design-parent">
                    <div className="name-of-assessment">Web Development</div>
                    <img className="close-icon" alt="" src="/close.svg" />
                  </div>
                </div>
              </div>
              <div className="frame-parent40">
                <div className="frame-wrapper6">
                  <div className="uiux-and-design-parent">
                    <div className="name-of-assessment">UI/UX and Design</div>
                    <img className="close-icon" alt="" src="/close.svg" />
                  </div>
                </div>
                <div className="frame-wrapper6">
                  <div className="uiux-and-design-parent">
                    <div className="name-of-assessment">Web Development</div>
                    <img className="close-icon" alt="" src="/close.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="type-here-container">
              <div className="name-of-assessment">Type here</div>
            </div>
          </div>
        </div>
        <div className="frame-parent34">
          <div className="name-of-assessment-wrapper">
            <div className="name-of-assessment">Duration of assessment</div>
          </div>
          <div className="hhmmss-parent">
            <div className="name-of-assessment">HH:MM:SS</div>
            <img
              className="keyboard-arrow-down-icon2"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className="buttons-wrapper">
        <div className="buttons">
          <div className="create-new-assessment">Save</div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
