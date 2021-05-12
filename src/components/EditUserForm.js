import React, {Fragment} from 'react'
import {useForm} from 'react-hook-form'

const EditUserForm = (props) => {

    const {register, handleSubmit} = useForm();
    const sendForm = (formData) => {
        props.updateUsers(props.editUser.id, formData);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(sendForm)}>
                <div className="row">
                    <div className="col-md-3">
                        <input className="form-control"
                               placeholder="Avatar"
                               defaultValue={props.editUser.avatar}
                               {...register("avatar")}/>
                    </div>
                    <div className="col-md-3">
                        <input className="form-control"
                               placeholder="Name"
                               defaultValue={props.editUser.name}
                               {...register("name")}/>
                    </div>
                    <div className="col-md-3">
                        <input className="form-control"
                               placeholder="Age"
                               defaultValue={props.editUser.age}
                               {...register("age")}/>
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </div>
            </form>

        </Fragment>
    );
};

export default EditUserForm;
