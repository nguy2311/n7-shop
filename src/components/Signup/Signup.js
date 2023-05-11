import React, {useState} from 'react';
import './Signup.css'
import {useForm} from "react-hook-form";
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router';
import {SignupUser} from '../../actions/UserAction'

function Signup(props) {
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const onSubmit = data => {
        if (data.card_num === '' && data.card_type === '') {
            data = {
                ...data,
                card_num: null,
                card_type: null
            }
        }
        const {repeat_password, ...rest} = data;
        if (password === confirmPassword) {
            dispatch(SignupUser(rest))
        } else {
            alert("wrong repeat password")
        }
    }

    return (
        <div className="signup-page">
            <h2>Đăng ký</h2>
            <form onSubmit={handleSubmit(onSubmit)} classname="form-signup">
                <input {...register("full_name")} placeholder="Full name" required/>
                <input {...register("user_name")} placeholder="User name" required/>
                <input
                    {...register("email")}
                    placeholder="Email"
                    type="email"
                    required
                />
                <div className="group">
                    <input
                        {...register("password")}
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        {...register("repeat_password")}
                        placeholder=" Repeat password"
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="group">
                    <input {...register("card_num")} placeholder="Card number"/>
                    <input {...register("card_type")} placeholder="Card type"/>
                </div>
                <input {...register("address")} placeholder="Address" required/>
                <input {...register("tel")} placeholder="Telephone" required/>
                <input type="submit" value="Đăng Ký"/>
            </form>
        </div>
    );
}

export default Signup;