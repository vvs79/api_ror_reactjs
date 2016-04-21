var User = React.createClass({
    getInitialState() {
        return {editable: false}
    },
    handleEdit() {
        if(this.state.editable) {
            var id = this.props.user.id;
            var login = this.refs.login.value;
            var email = this.refs.email.value;
            var user = {id: id , login: login , email: email};
            this.props.handleUpdate(user);

        }
        this.setState({ editable: !this.state.editable })
    },

    render() {
        var login = this.state.editable ? <input type='text' ref='login' defaultValue={this.props.user.login} /> : <h5>{this.props.user.login}</h5>;
        var email = this.state.editable ? <input type='text' ref='email' defaultValue={this.props.user.email} />: <h5>{this.props.user.email}</h5>;
        return (
            <div>
              <table border="2">
                <tbody align="center">
                  <tr>
                    <td>{login}&nbsp;</td>
                    <td>{email}&nbsp;</td>
                    <td>
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
