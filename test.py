# POST Requests with Fetch


# <form action='/new_destination' id='myForm' method='post'>
#     <label for="name">Name: </label>
#     <input type='text' name='name'>
#     <input type='submit' id='submit_btn' value='Submit'>
# </form>
   
# <script>
#     var myForm = document.getElementById('myForm');
#     myForm.onsubmit = function(e){
#         // "e" is the event happening when we submit the form.
#         // do something here ...
#     }
# </script>


# <form  id="myForm" method="post">
#     <label for="name">Name: </label>
#     <input type="text" name="name">
#     <input type="submit" id="submit_btn" value="Submit">
# </form>
   
# <script>
#     var myForm = document.getElementById('myForm');
#     myForm.onsubmit = function(e){
#         // "e" is the js event happening when we submit the form.
#         // e.preventDefault() is a method that stops the default nature of javascript.
#         e.preventDefault();
#         // do something here ...
#     }
# </script>


# POST Requests w/ Fetch
# <form id="myForm" method="post">
#     <label for="name">Name: </label>
#     <input type="text" name="name">
#     <input type="submit" id="submit_btn" value="Submit">
# </form>
   
# <script>
#     var myForm = document.getElementById('myForm');
#     myForm.onsubmit = function(e){
#         //"e" is the js event happening when we submit the form.
#         // e.preventDefault() is a method that stops the default nature of javascript.
#         e.preventDefault();
#         // create FormData object from javascript and send it through a fetch post request.
#         var form = new FormData(myForm);
#         // this how we set up a post request and send the form data.
#         fetch("http://localhost:5000/create/user", { method :'POST', body : form})
#             .then( response => response.json() )
#             .then( data => console.log(data) )
#     }
# </script>
# from flask_app.models.user import User
# from flask_app import app
# from flask import render_template, jsonify, request, redirect
# @app.route('/create/user',methods=['POST'])
# def create_user():
#     print(request.form)
#     # write code to save it to our database . . .
#     return jsonify(message="Add a user!!!")