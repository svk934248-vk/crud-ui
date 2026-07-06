"use client";

import API from "../services/api";

export default function StudentTable({
  students,
  fetchStudents,
  setEditStudent,
}) {

  const deleteStudent = async(id)=>{
      await API.delete(`/students/${id}`);
      fetchStudents();
  }

  return (

    <table className="student-table">

      <thead>

        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Parent Name</th>
          <th>Actions</th>
        </tr>

      </thead>

      <tbody>

        {students.map((student)=>(
          <tr key={student.id}>

            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.phone}</td>
            <td>{student.emailid}</td>
            <td>{student.parentsname}</td>

            <td>

              <button
                className="edit-btn"
                onClick={()=>setEditStudent(student)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={()=>deleteStudent(student.id)}
              >
                Delete
              </button>

            </td>

          </tr>
        ))}

      </tbody>

    </table>

  );

}