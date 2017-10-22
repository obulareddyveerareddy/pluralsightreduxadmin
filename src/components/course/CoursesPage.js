import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class CoursesPage extends React.Component{
    
    render(){
        return(
            <div className="container">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Published</th>
                        <th>Review</th>
                        <th>Comments</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="6">
                                <span className="msg-no-data-found text-warning">No Data Found.</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CoursesPage;