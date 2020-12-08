import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import StudentList from "../../components/StudentList/StudentList";

const GET_STUDENTS = gql`
  query GelAllStudents {
    students {
      name
      age
      email
    }
  }
`;

const ADD_STUDENT = gql`
  mutation onAddStudent(
    $id: Int!
    $name: String!
    $email: String!
    $age: Int!
  ) {
    addStudent(input: { id: $id, name: $name, email: $email, age: $age}) {
      name
      age
      email
    }
  }
`;

function Student() {
  const { loading, error, data } = useQuery(GET_STUDENTS);
  const [addStd] = useMutation(ADD_STUDENT);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(error);
    return <h1>Error</h1>;
  }
  return (
    <div>
      <h2>List of Students</h2>
      {data.students.length &&
        data.students.map((std, ind) => <StudentList data={std} key={ind} />)}
      <button
        style={{
          padding: 7,
          fontSize: 18,
          background: "#0275d8",
          color: "#fff",
          borderRadius: 10,
          borderColor: "#0275d8",
          marginTop: 20,
        }}
        onClick={() => addStd({ variables: { id: Math.round(Math.random() * 55), name: 'testing', email: 'testing@testing.com', age: 25 } })}
      >
        Add Student
      </button>
    </div>
  );
}

export default Student;
