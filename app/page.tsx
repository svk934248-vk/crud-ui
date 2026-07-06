"use client";

import { useEffect, useState } from "react";
import API from "./services/api";
import StudentForm from "./components/studentForm";
import StudentTable from "./components/studentTable";

export default function Home() {

  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const fetchStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (

    <main className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-700 p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-white mb-2">
          Student CRUD
        </h1>

        <p className="text-center text-blue-100 mb-10">
          Student Management System
        </p>

        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <StudentForm
            fetchStudents={fetchStudents}
            editStudent={editStudent}
            setEditStudent={setEditStudent}
          />

          <div className="mt-10">

            <StudentTable
              students={students}
              fetchStudents={fetchStudents}
              setEditStudent={setEditStudent}
            />

          </div>

        </div>

      </div>

    </main>

  );
}