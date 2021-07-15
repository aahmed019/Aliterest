json.extract! @user, :id, :email, :f_name, :l_name
json.set! :user_photo, url_for(@user.photo)