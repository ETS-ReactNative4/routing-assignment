import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Course extends Component {
    state = {
        title: '_COURSE_TITLE_',
        id: '_ID_'
    }

    componentDidMount() {
        console.log(this.props);
    }
    render () {
        let course = null;
        const params = new URLSearchParams(this.props.location.search)
        if(this.props.match.params.courseId) {  //we can already obtain the id but the data are still not loaded 
            //as the loading happens async  
            course = (
                <div>
                <h1>{params.get('title')}</h1>
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