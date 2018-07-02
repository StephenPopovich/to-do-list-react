import React, { Component } from 'react';


class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }
  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert("Title is requried");

    } else {

    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value="category">{category}</option>
    });
    return (
      <div>
       <h3>Add Project</h3>
       <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>Title</label><br />
              <input type="text" ref="title" />
            </div>
            <div>
              <label>category</label>
              <br />
              <select ref="Category">
               {categoryOptions}
               </select>
            </div>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
