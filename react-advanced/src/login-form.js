import React from 'react';
import { useInput } from './hooks';
import { useUserContext } from './user-context';

const LoginForm = () => {
    const name = useInput("", { persist: "name" })
    const surname = useInput("", { persist: "surname" })
    // const password = useInput("", { persist: "password" })
    const { user, setUser } = useUserContext()

    const onSubmit = () => setUser({ name: name.value, surname: surname.value })

    return (
        <div>
            <h1>A simple form</h1>
            <input type="text" placeholder="name" {...name.bindToProps} />
            <br />
            <input type="text" placeholder="surname" {...surname.bindToProps} />
            <br />
            {/* <input type="password" placeholder="password" {...password.bindToProps} />
            <br /> */}
            <button type="submit" onClick={onSubmit}>
                submit
            </button>
            <div>
                <p>{name.value}</p>
                <p>{surname.value}</p>
                {/* <p>{password.value}</p> */}
            </div>
        </div>
    );
}

export default LoginForm;