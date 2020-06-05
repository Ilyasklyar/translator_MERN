import React, { useState } from 'react'
import { connect } from 'react-redux'
import { userLogin, userRegister } from '../../redux/actions/auth'
import { Message } from '../Message/Message'

const Auth = props => {

  const [form, setForm] = useState({ email: '', password: '' })

  const onChangeHandler = event => {
    setForm({
      ...form, [event.target.name]: event.target.value
    })
  }


  const onClickLogin = () => {
    props.login(form)
  }

  const onClickRegister = () => {
    props.register(form)
  }

  return (
    <div className="row login">
      <div className="row">
        <div className="input-field col s6 center">
          <input
            id="password"
            type="password"
            name="password"
            className="validate"
            value={form.password}
            onChange={onChangeHandler}
          />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6 center">
          <input
            id="email"
            type="email"
            name="email"
            className="validate"
            value={form.email}
            onChange={onChangeHandler} />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      { props.message ?
        <Message message={props.message} />
        : null }
      <div className="row">
        <div className="col s6 center">
          <div className="wraper-btn">
            <button className="btn-large waves-effect waves-light" type="submit" name="action" onClick={onClickLogin} >Войти</button>
            <button className="btn-large waves-effect waves-light" type="submit" name="action" onClick={onClickRegister}>Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>

  )
}

const mapStateToProps = state => {
  return {
    message: state.auth.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: form => dispatch(userLogin(form)),
    register: form => dispatch(userRegister(form)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)