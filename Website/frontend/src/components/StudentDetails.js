const StudentDetails = ({student}) => {
    
    return (
        <div className="student-details">
            <h2>Student Details</h2>
            <p>Student Name: {student.name}</p>
            <h3>Allowed Products:</h3>
            <ul>
                
            </ul>
        </div>
    );
};

export default StudentDetails;
