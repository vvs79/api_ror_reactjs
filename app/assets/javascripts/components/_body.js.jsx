var Body = React.createClass({
    getInitialState() {
        return { users: [] }
    },


    componentDidMount() {
        $.getJSON('/api/users.json', (response) => { this.setState({ users: response }) });
    },



    handleSubmit(user) {
        var newState = this.state.users.concat(user);
        this.setState({ users: newState })
    },


    handleDelete(id) {
        $.ajax({
            url: `/api/users/${id}`,
            type: 'DELETE',
            success:() => {
               this.removeUserClient(id);
            }
        });
    },

    removeUserClient(id) {
        var newUsers = this.state.users.filter((user) => {
            return user.id != id;
        });

        this.setState({ users: newUsers });
    },



    handleUpdate(user) {
        $.ajax({
                url: `/api/users/${user.id}`,
                type: 'PUT',
                data: { user: user },
                success: () => {
                    this.updateUsers(user);

                }
            }
        )},

    updateUsers(user) {
        var users = this.state.users.filter((i) => { return i.id != user.id });
        users.push(user);

        this.setState({users: users });
    },


    render() {
        return (
            <div>
                <NewUser handleSubmit={this.handleSubmit}/>
                <AllUsers  users={this.state.users}  handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
            </div>
        )
    }
});
