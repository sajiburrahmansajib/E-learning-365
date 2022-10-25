import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const data = useLoaderData();
    return (
        <div>
            <h1>Total courses : {data.length}</h1>
        </div>
    );
};

export default Courses;