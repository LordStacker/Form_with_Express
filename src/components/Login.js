import React, { useState } from "react";

const Login = () => {
    const [user, setUser] = useState({
        names: "",
        birth: "",
        age: ""
    });
    const HandleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    return <div className="container">
        <form>
            <div className="mx-auto mt-auto">
                <div className="row">
                    <div className="col-md-3 mx-auto">
                        <input type="text" className="form-control" placeholder="Complete name" name="names" required onChange={HandleChange} value={user.names} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mx-auto">
                        <input type="date" className="form-control" placeholder="Birthday" name="birth" required onChange={HandleChange} value={user.birth} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mx-auto">
                        <input type="number" className="form-control" placeholder="Age" min="1" max="99"  name="age" required onChange={HandleChange} value={user.age} />
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
}

export default Login;