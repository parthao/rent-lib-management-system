import React, { useEffect, useState } from "react";
import Student from "../../Services/Student.service.tsx";

const StudentList = () => {
  const [studentList, setStudentList] = useState<StudentListProps[]>([]);
  useEffect(() => {
    Student.GetStudent().then((resp) => {
      setStudentList(resp.data);
    });
  }, []);
  return (
    <div>
      {studentList.map((student) => (
        <ol>{student.firstName}</ol>
      ))}
    </div>
  );
};

export default StudentList;
