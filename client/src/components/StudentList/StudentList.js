import React from 'react';

function StudentList(props) {
    const { name, age, email } = props.data;
    return (
        <p>{name} - {email} - {age}</p>
    );
}

export default StudentList;
