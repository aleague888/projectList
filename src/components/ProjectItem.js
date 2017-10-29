import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    //console.log('test');
    this.props.onDelete(id);
  }


  render() {

    //console.log(this.props);
    return (
      <li className="Project">
        <b>{this.props.project.title}</b> : {this.props.project.category}
        <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
