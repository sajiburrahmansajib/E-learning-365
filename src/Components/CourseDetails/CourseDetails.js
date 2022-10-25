import React from 'react';
import { FaTag } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = () => {
    const selectedCourse = useLoaderData();
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-auto mt-10">
            <figure><img src={selectedCourse.picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{selectedCourse.name}</h2>
                <p>{selectedCourse.info}</p>
                <div>
                    <p>Total Class : {selectedCourse.totalClass}</p>
                    <p>Price : {selectedCourse.prize} tk</p>
                    <p>Total Duration : {selectedCourse.duration} month</p>
                    <p>Total Video : {selectedCourse.videoDuration} hour</p>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-success font-bold">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;