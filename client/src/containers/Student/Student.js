import React from 'react';
import { gql, useQuery } from '@apollo/client';
import StudentList from '../../components/StudentList/StudentList';

const GET_STUDENTS = gql`
  query GelAllStudents {
    students {
      name,
      age,
      email
    }
  }
`;

function Student() {
    const { loading, error, data } = useQuery(GET_STUDENTS);
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        console.log(error); return <h1>Error</h1>;
    }
    return (
        <div>
            <h2>List of Students</h2>
            {data.students.length && data.students.map((std, ind) => (
                <StudentList data={std} key={ind} />
            ))}
        </div>
    );
}

export default Student;
