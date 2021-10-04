import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';

const AboutUs = () => {
    const [teachers, setTeachers] = useState ([]);
    useEffect (() => {
        fetch ('./teachers.json')
        .then (res => res.json ())
        .then (data => setTeachers(data));
    },[])
    return (
        <div className ="container">
            <div className="container my-5 shadow-sm p-5 rounded-3">
                <h1 className=" fs-1 fw-bolder text-primary">Who We Are</h1>
            </div>
            
            <div className="container my-5 shadow-sm p-5 rounded-3">
                <p> Bringing quality education at your fingertips. We are the few around you, who came up with the idea of creating a unique platform where every student gets maximum exposure to each lesson they are taught through various mediums. We meant a lot with it. We strive tirelessly to give you the best of education you deserve.</p>
            </div>
            <div  className="container row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
                {
                    teachers.map(teacher => <Teacher
                    key = {teacher.ID}
                    teacher = {teacher}
                    />) 
                }
            </div>
        </div>
    );
};

export default AboutUs;