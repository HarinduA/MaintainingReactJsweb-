 // state =  {
       // email:"",
        //details:"",
        //emailError:'', // formValidation
        //passwordError:'' // formValidation
      //  age:''
   // }

    //Changedata = (e) => {
      //  let val = e.target.name; //username
       // let myvalue = e.target.value // getting value
       // this.setState({[val]:myvalue}); // value set on the state
   // }


    //formSubmit = (event) => {

       // event.preventDefault();
       // console.log(this.state.username);
   // }

   /* validate(){
        if(!this.state.email> 0 && !this.state.password ){
            this.setState({emailError:"Email adn Password Reqired"})

        }else if (!this.state.email> 0){
            this.setState({emailError:"Email Required"})

        }else if (!this.state.password> 0){
            this.setState({emailError:"Password Required"})

        }else{
            return true;
        }
    }


   formSubmit = (e) =>{

       e.preventDefault();
       if(this.validate()){
        alert("Form Submit Done");
       }
    }*/







    // functional Components 

// <Learning/>  Class components 

/*<Learn name = 'Mango' weight="120gm"/>
<Learn name = 'Stawberry' weight="120gm"/>  // props
<Learn name = 'Apple' weight="50gm"/> */

// <img src={logo} classname ="App-logo" alt="logo"/>  JSX 

// single input / onchange 

//<strong style ={{color:'red'}}> {this.state.emailError}</strong><br></br> Valllidation


/*<label>Details:</label><br></br>
<textarea onChange={(event)=> {this.setState({details:event.target.value})}}>Write on here....</textarea><br></br>
<h6>{this.state.details}</h6> */ //textarea



//Select option

/*<h1>Select Option</h1>
           
            <div>
                <form onSubmit={this.formSubmit}>
                    <div class="form-group" style={{marginLeft:200}} >
                        <label>Your Age:</label><br></br>
                    <select onChange={(event)=>{this.setState({age:event.target.value})}}>
                        <option value="" selected disabled>Select Your Age</option>
                        <option value="15 - 20">15-20</option>
                        <option value="20 - 25">30-25</option>
                        <option value="25 - 30">25-30</option>
                        <option value="30 - 35">30-35</option>
                    </select><br></br>
                    <h6>My Age: {this.state.age}</h6>

                        
                        <button type='submit'>Submit</button>
                    
                    </div>
                </form>
            </div>*/



            /*
    const names =[
        {name:'Harindu',age:'19',grade:'Lv4'},
        {name:'Hansaka',age:'21',grade:'Lv2'},
        {name:'ane1',age:'20',grade:'Lv3'}
    ];
    const item = names.map((item, idx)=> {
        return <li class ="list-items" key ={{idx}}>
            Name : {item.name},  Age: {item.age},  Grade: {item.grade} 
            <Button variant ="secondary">Edit</Button> |
             <Button variant ="dark">Delete</Button>

        </li>
    });*/