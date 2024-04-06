function validation(values){
    
    let error = {}

    if(values.name ==="") {
        error.name = "Name should not be empty"
    }else {
        error.name = ""
    }

    if(values.email ==="") {
        error.email = "Name should not be empty"
    }else {
        error.email = ""
    }

    if(values.hname ==="") {
        error.hname = "Name should not be empty"
    }else {
        error.hname = ""
    }

    if(values.address ==="") {
        error.address = "Name should not be empty"
    }else {
        error.address = ""
    }

    if (values.password ==="") {
        error.password= "Password should not be empty"
    } else {
        error.password=""
    }

    if(values.phone ==="") {
        error.phone = "Name should not be empty"
    }else {
        error.phone = ""
    }
    return error;
}
export default validation;
