class Api::UsersController < Api::BaseController
	before_action :authenticate_user!
	# before_action :check_if_admin, only: [:new, :create, :edit, :update, :destroy]
	before_action :get_users, only: [:index, :order_by_login, :order_by_email, :order_by_lname, :order_by_fname]
  # skip_before_action :verify_authenticity_token, only: [:create]

  def index
  	@users = @search.result.paginate(page: params[:page] || 1, per_page: 10).order(id: :desc) 
    # respond_with @users
    respond_with User.all
  end

  def order_by_login
    @users = @search.result.paginate(page: params[:page] || 1, per_page: 10).order(login: :asc)
    render 'index'
  end

  def order_by_email
    @users = @search.result.paginate(page: params[:page] || 1, per_page: 10).order(email: :asc)
    render 'index'
  end

  def order_by_fname
    @users = @search.result.paginate(page: params[:page] || 1, per_page: 10).order(first_name: :asc)
    render 'index'
  end

  def order_by_lname
    @users = @search.result.paginate(page: params[:page] || 1, per_page: 10).order(last_name: :asc)
    render 'index'
  end

  def show
  	@user = User.find(params[:id])
    # respond_with @user
    respond_with User.find(params[:id])
  end

  def create
    respond_with User.create(user_params)
  end

  def destroy
    respond_with User.destroy(params[:id])#, location: root_path
  end

  def update
    user = User.find(params["id"])
    user.update_attributes(user_params)
    respond_with user, json: user
  end

  private

  def get_users
    @users = User.all
    @search = @users.search(params[:q] || {})
  end

    def user_params
      params.require(:user).permit(:login, :first_name, :last_name, :email, :password, :avatar)
    end
   
end
