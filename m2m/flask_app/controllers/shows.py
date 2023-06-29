from flask import render_template,redirect,session,request, flash
from flask_app import app
from flask_app.models.show import Show
from flask_app.models.user import User


@app.route('/shows/new')
def new_show():
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":session['user_id']
    }
    return render_template('new.html',user=User.get_one_by_id(data))


@app.route('/create/show',methods=['POST'])
def create_show():
    if 'user_id' not in session:
        return redirect('/logout')
    if not Show.validate_show(request.form):
        return redirect('/shows/new')
    data = {
        **request.form,
        "id": session["user_id"]
    }
    Show.create_show(data)
    return redirect('/shows')

@app.route('/shows/edit/<int:id>')
def edit_show(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":id
    }
    user_data = {
        "id":session['user_id']
    }
    return render_template("edit_show.html",edit=Show.get_one(data),user=User.get_one_by_id(user_data))

@app.route('/update/show',methods=['POST'])
def update_show():
    if 'user_id' not in session:
        return redirect('/logout')
    if not Show.validate_show(request.form):
        show_id=request.form['id']
        return redirect(f'/shows/edit/{show_id}')
    data = {
        "title": request.form["title"],
        "network": request.form["network"],
        "description": request.form["description"],
        "date": request.form["date"],
        "id": request.form['id']
    }
    Show.fix(data)
    return redirect('/shows')

@app.route('/shows/<int:id>')
def show_show(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":id
    }
    show=Show.get_one(data)
    user_data= {
        "id":show.user_id
    }
    return render_template("show.html",show=show,user=User.get_one_by_id(user_data))
@app.route('/destroy/show/<int:id>')
def destroy_show(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":id
    }
    Show.destroy(data)
    return redirect('/shows')