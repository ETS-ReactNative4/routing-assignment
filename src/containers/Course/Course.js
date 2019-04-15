import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Course extends Component {
    state = {
        title: '_COURSE_TITLE_',
        id: '_ID_'
    }
    render () {
        let course = null;
        if(this.props.match.params.courseId) {  //we can already obtain the id but the data are still not loaded 
            //as the loading happens async  
            course = (
                <div>
                <h1>{this.props.match.params.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
            );
        }
        return (
            course
        );
    }
}

export default withRouter(Course);