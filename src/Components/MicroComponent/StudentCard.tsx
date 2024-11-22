import React from "react";
import "../../css/studentcard.css";

const StudentCard: React.FC<StudentListProps> = ({
  firstName,
  lastName,
  address,
  mobileNumber,
}) => {
  return (
    <div>
      <div className="card-container">
        <div className="triangle4"></div>
        <div className="triangle3"></div>
        <div className="hex1">
          <div className="hex2">
            <img
              className="responsive-image"
              src="https://media.licdn.com/dms/image/C4E12AQGlBJCFbTzZbw/article-cover_image-shrink_720_1280/0/1530350192521?e=2147483647&v=beta&t=6nUXmN4EV-d60rt4Ow0woncupV6H-a2VFgs8nOL7lAM"
            />
          </div>
        </div>
        <div className="triangle2"></div>
        <div className="triangle1"></div>
        <div className="text-container">
          <div className="heading-text">
            {" "}
            {firstName} {lastName}
          </div>
          <div className="normal-text">
            <div>Mobile :- {mobileNumber}</div>
            <div>Address :- {address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
