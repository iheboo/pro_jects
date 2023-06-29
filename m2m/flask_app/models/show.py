from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash


class Show:
    db_name ="validation"
    def __init__(self,data):
        self.id=data['id']
        self.title=data ['title']
        self.network=data['network']
        self.description=data['description']
        self.date=data['date']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']
        self.user_id=data['user_id']

#Update User

    @classmethod
    def fix(cls,data):
        query = "UPDATE shows SET title=%(title)s,network=%(network)s,date=%(date)s,description=%(description)s WHERE id = %(id)s;"
        return connectToMySQL(cls.db_name).query_db(query,data)

#delete User

    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM shows WHERE id = %(id)s;"
        return connectToMySQL(cls.db_name).query_db(query,data)

# Create

    @classmethod
    def create_show(cls,data):
        query = "INSERT INTO shows (title,network,date,description,user_id) VALUES (%(title)s,%(network)s,%(date)s,%(description)s,%(id)s);"
        return connectToMySQL(cls.db_name).query_db(query,data)
#  Read
    # all
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM shows;"
        results =  connectToMySQL(cls.db_name).query_db(query)
        all_recipes = []
        for row in results:
            all_recipes.append( cls(row) )
        return all_recipes
    # one
    @classmethod
    def get_one(cls,data):
        query = "SELECT * FROM shows WHERE id = %(id)s;"
        results = connectToMySQL(cls.db_name).query_db(query,data)
        return cls( results[0] )

    @staticmethod
    def validate_show(show):
        is_valid = True
        if len(show['title']) < 3:
            is_valid = False
            flash("Title must be at least 3 characters","show")
        if len(show['network']) < 3:
            is_valid = False
            flash("Network must be at least 3 characters","show")
        if len(show['description']) < 3:
            is_valid = False
            flash("Description must be at least 3 characters","show")
        if show['date'] == "":
            is_valid = False
            flash("Please enter a date","show")
        return is_valid
