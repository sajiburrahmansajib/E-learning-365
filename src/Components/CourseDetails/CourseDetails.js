import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FcDownload } from "react-icons/fc";
import Pdf from "react-to-pdf";
import './CourseDetails.css'

const CourseDetails = () => {
    const ref = React.createRef();
    const selectedCourse = useLoaderData();
    return (
        <div>
            <div className='bg-red-400 flex justify-center items-center mt-4 p-2'>
                <h1 className=' text-xl font-bold  mr-4'>Your selected Course Details Show Now !!</h1>
                <Pdf targetRef={ref} filename={`${selectedCourse.name}.pdf`}>
                    {({ toPdf }) => <button onClick={toPdf}><FcDownload className='font-bold text-4xl'></FcDownload></button>}
                </Pdf>
            </div>

            <div ref={ref} className="card w-96 bg-base-100 shadow-xl m-auto mt-10">
                <figure><img src={selectedCourse.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{selectedCourse.name}</h2>
                    <p>{selectedCourse.info}</p>
                    <div>
                        <p>Total Class : {selectedCourse.totalClass}</p>
                        <p>Price : {selectedCourse.prize} tk</p>
                        <p>Course Duration : {selectedCourse.duration} month</p>
                        <p>Total Video : {selectedCourse.videoDuration} hour</p>
                    </div>
                </div>
            </div>
            <div className="card-actions justify-center mt-5">
                <Link to={selectedCourse.id}><button className="btn btn-success font-bold">Enroll Now</button> </Link>
            </div>
        </div>
    );
};

export default CourseDetails;