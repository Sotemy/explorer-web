import { useEffect, useState } from "react"
import { FaSignInAlt } from "react-icons/fa"

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',

    })

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <>
    <section className="heading">
        <h1>
            <FaSignInAlt /> Login
        </h1>
        <p>Please login</p>
    </section>
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                    <input type="email" 
                    className='form-control' 
                    id='email' 
                    name='email' 
                    value={email} 
                    placeholder='Enter email' 
                    onChange={onChange} />
            </div>
            <div className="form-group">
                    <input type="password" 
                    className='form-control' 
                    id='password' 
                    name='password' 
                    value={password} 
                    placeholder='Enter password' 
                    onChange={onChange} />
            </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </section></>
  )
}

export default Login