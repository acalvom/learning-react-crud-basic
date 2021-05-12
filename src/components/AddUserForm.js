import React, {Fragment} from 'react'
import {useForm} from 'react-hook-form'

const AddUserForm = (props) => {

    const {register, formState: {errors}, handleSubmit} = useForm();
    const sendForm = (formData, event) => { //Esta data es la que va a App, a la función addUser que le añade el id
        event.target.reset();
        props.addUser(formData);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(sendForm)}>
                <div className="row">
                    <div className="col-md-3">
                        <input className="form-control"
                               placeholder="Avatar"
                               {...register("avatar")}/>
                    </div>
                    <div className="col-md-3">
                        <input className="form-control"
                               placeholder="Name"
                               {...register("name", {required: true, maxLength: 20})}/>
                        {errors.name && errors.name.type === "required" && <span>Campo obligatorio</span>}
                        {errors.name && errors.name.type === "maxLength" && <span>Max 20 caracteres</span>}
                    </div>
                    <div className="col-md-3">
                        <input className="form-control"
                               placeholder="Age"
                               {...register("age", {required: true, min: 18, max: 99})}/>
                        {errors.age && errors.age.type === "required" && <span>Campo obligatorio</span>}
                        {errors.age && errors.age.type === "min" && <span>You need to an adult</span>}
                        {errors.age && errors.age.type === "max" && <span>WTF???</span>}
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>

        </Fragment>
    );
};

export default AddUserForm;
