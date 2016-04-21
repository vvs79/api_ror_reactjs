var NewUser= React.createClass({
    handleClick() {
        var first_name = this.refs.first_name.value;
        var last_name = this.refs.last_name.value;
        var login = this.refs.login.value;
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        var avatar = this.refs.avatar.value;
        $.ajax({
            url: '/api/users',
            type: 'POST',
            data: { user: { first_name: first_name, last_name: last_name, login: login, email: email, password: password, avatar: avatar } },
            success: (user) => {
                this.props.handleSubmit(user);
            }
        });
    },
    render() {
        return (
                <div>
                    <input type="text" ref='first_name' placeholder='Enter first name' />&nbsp;
                    <input type="text" ref='last_name' placeholder='Enter last name' />&nbsp;
                    <input type="text" ref='login' placeholder='Enter login' />&nbsp;
                    <input type="email" ref='email' placeholder='Enter email' />&nbsp;
                    <input type="password" ref='password' placeholder='Enter password' />&nbsp;
                    <input type="file" ref='avatar' />&nbsp;
                    <button onClick={this.handleClick}>Create user</button><br /><br />
                </div>

        )
    }
});
