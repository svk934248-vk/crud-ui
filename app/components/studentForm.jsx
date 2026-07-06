"use client";

import { useEffect, useState } from "react";
import API from "../services/api";

export default function StudentForm({
  fetchStudents,
  editStudent,
  setEditStudent,
}) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    emailid: "",
    parentsname: "",
  });

  useEffect(() => {
    if (editStudent) {
      setForm(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async () => {
    if (editStudent) {
      await API.put(`/students/${editStudent.id}`, form);
      setEditStudent(null);
    } else {
      await API.post("/students", form);
    }

    setForm({
      name: "",
      age: "",
      phone: "",
      emailid: "",
      parentsname: "",
    });

    fetchStudents();
  };

  return (
    <div className="form-container">

      <input
        name="name"
        placeholder="Student Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        name="emailid"
        placeholder="Email"
        value={form.emailid}
        onChange={handleChange}
      />

      <input
        name="parentsname"
        placeholder="Parent Name"
        value={form.parentsname}
        onChange={handleChange}
      />

      <button onClick={submit}>
        {editStudent ? "Update Student" : "Add Student"}
      </button>

    </div>
  );
}