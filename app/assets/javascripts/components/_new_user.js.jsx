var NewUser= React.createClass({
    handleClick() {
        var first_name = this.refs.first_name.value;
        var last_name = this.refs.last_name.value;
        var login = this.refs.login.value;
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        $.ajax({
            url: '/api/users',
            type: 'POST',
            data: { user: { first_name: first_name, last_name: last_name, login: login, email: email, password: password } },
            success: (user) => {
                this.props.handleSubmit(user);
            }
        });
    },
    render() {
        return (
                <div>
                    <input ref='login' placeholder='Enter first name' />&nbsp;
                    <input ref='email' placeholder='Enter last name' />&nbsp;
                    <input ref='login' placeholder='Enter login' />&nbsp;
                    <input ref='email' placeholder='Enter email' />&nbsp;
                    <input ref='login' placeholder='Enter password' /><br />
                    <button onClick={this.handleClick}>Create user</button><br /><br />
                </div>

        )
    }
});
