from flask_app.models.user import User
from flask_app.config.mysqlconnection import connectToMySQL

class Like:
    db_name ="validation"
    def __init__( self , db_data ):
        self.id = db_data['id']
        # we need have a list.
        self.on_like = []
        self.created_at = db_data['created_at']
        self.updated_at = db_data['updated_at']
    
    @classmethod
    def save( cls , data ):
        query = "INSERT INTO likes ( id, created_at , updated_at ) VALUES (%(id)s,NOW(),NOW());"
        return connectToMySQL(cls.db_name).query_db(query, data)
    # This method will retrieve the specific topping along with all the burgers associated with it.
    @classmethod
    def get_user_with_like( cls , data ):
        query = "SELECT * FROM likes LEFT JOIN users ON users.id = likes.user_id LEFT JOIN likes ON likes.friend_id = likes.id WHERE likes.id = %(id)s;"
        results = connectToMySQL(cls.db_name).query_db( query , data )
        # results will be a list of topping objects with the burger attached to each row. 
        likes = cls( results[0] )
        for row_from_db in results:
            # Now we parse the topping data to make instances of toppings ="keyword from-rainbow">and add them into our list.
            user_data = {
                "id" : row_from_db["likes.id"],
                "first_name" : row_from_db["first_name"],
                "last_name" : row_from_db["last_name"],
                "created_at" : row_from_db["likes.created_at"],
                "updated_at" : row_from_db["likes.updated_at"]
            }
            likes.on_like.append( User( user_data ) )
        return likes