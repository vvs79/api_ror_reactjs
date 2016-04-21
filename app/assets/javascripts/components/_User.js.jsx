var User = React.createClass({
    getInitialState() {
        return {editable: false}
    },
    handleEdit() {
        if(this.state.editable) {
            var id = this.props.user.id;
            var first_name = this.refs.first_name.value;
            var last_name = this.refs.last_name.value;
            var login = this.refs.login.value;
            var email = this.refs.email.value;
            var user = {id: id, first_name: first_name, last_name: last_name, login: login, email: email};
            this.props.handleUpdate(user);

        }
        this.setState({ editable: !this.state.editable })
    },

    render() {
        var first_name = this.state.editable ? <input type='text' ref='first_name' defaultValue={this.props.user.first_name} /> : <h5>{this.props.user.first_name}</h5>;
        var last_name = this.state.editable ? <input type='text' ref='last_name' defaultValue={this.props.user.last_name} />: <h5>{this.props.user.last_name}</h5>;
        var login = this.state.editable ? <input type='text' ref='login' defaultValue={this.props.user.login} /> : <h5>{this.props.user.login}</h5>;
        var email = this.state.editable ? <input type='text' ref='email' defaultValue={this.props.user.email} />: <h5>{this.props.user.email}</h5>;
        //var id = this.state.editable ? <input type='text' ref='email' defaultValue={this.props.user.id} />: {this.props.user.id};
        var id = "/api/users/" + this.props.user.id;
        return (
            <div>
              <table border="2">
                <tbody align="center">
                  <th>
                    <td>First name</td><td>|</td>
                    <td>Last name</td><td>|</td>
                    <td>Login</td><td>|</td>
                    <td>Email</td><td>|</td>
                    <td>Action</td>
                  </th>
                  <tr>
                    <td>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</td>
                    <td>{first_name}</td><td>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</td>
                    <td>{last_name}</td><td>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</td>
                    <td>{login}</td><td>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</td>
                    <td>{email}</td><td>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</td>
                    <td>
                      <a href={id}><button>Show user data</button></a>&nbsp;
                      <button onClick={this.props.handleDelete}>Delete</button>&nbsp;
                      <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
                    </td>
                  </tr>
                </tbody>
              </table> 
            </div>
        )
    }
});
