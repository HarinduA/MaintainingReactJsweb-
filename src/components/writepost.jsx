import React, { Component } from "react";
import axios from "axios";

export default class writepost extends Component{

    state={
        title:'',
        body:''
    }


    //Database 
    formSubmit =  (e) => {
        e.preventDefault();
        axios.post('/user', { // where this url woll be redirect
            title:this.state.title, // All that value which its will take
            body:this.state.body
          })
          .then(function (response) { /// this will use for success
            console.log(response);
          })
          .catch(function (error) { //  use for error
            console.log(error);
          });

    } // then , catch are funtions



    render(){
        return (
            <center>
                <div>
                    <div class="jumbotron col-lg-4">
                        <form onSubmit={this.formSubmit}>
                            <div class="form-group">
                                <label for="title" class="form-label">Title {this.state.title}</label>
                                <input type="text" class="form-control" id="title" name ="title" onChange={event => {this.setState({title:event.target.value})}} required />
                            </div>



                            <div class="form-group">
                                <label for="exampleInputPassword1">Detatails {this.state.title}</label>
                               <textarea class="form-control" name="body" onChange={event => {this.setState({title:event.target.value})}}>Write Here</textarea>
                            </div>
                            <br></br>

                            <button type="submit" class="btn btn-primary">Publish</button>

                        </form>
                    </div>
                </div>
            </center>
        );
    }
}