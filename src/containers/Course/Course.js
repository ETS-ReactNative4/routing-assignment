import React, { Component } from 'react';

class Course extends Component {
    state = {
        title: '_COURSE_TITLE_',
        id: '_ID_'
    }
    render () {
        return (
            <div>
                <h1>{this.title}</h1>
                <p>You selected the Course with ID: {this.id}</p>
            </div>
        );
    }
}

export default Course;