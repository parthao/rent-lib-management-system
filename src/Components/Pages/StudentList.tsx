import React, { useEffect, useState } from "react";
import Student from "../../Services/Student.service.tsx";
import StudentCard from "../MicroComponent/StudentCard.tsx";

const StudentList = () => {
  const [studentList, setStudentList] = useState<StudentListProps[]>([]);
  useEffect(() => {
    Student.GetStudent().then((resp) => {
      setStudentList(resp.data);
      console.log(resp.data);
    });
  }, []);
  return (
    <div>
      <div>
        <h1 className="mb-4">Student List</h1>
      </div>
      <div className="root-container">
        {studentList.map((student) => (
          <StudentCard
            firstName={student.firstName}
            lastName={student.lastName}
            address={student.address}
            mobileNumber={student.mobileNumber}
          ></StudentCard>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
