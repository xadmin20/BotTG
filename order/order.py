
from mysql.connector import connect, Error




try:
    with connect(
        host="141.8.192.169",
        user="a0543466_bot",
        password="afitiwedru",
    ) as connection:
        show_db_query = "SHOW DATABASES"
        with connection.cursor() as cursor:
            cursor.execute(show_db_query)
            for db in cursor:
                print(db)
except Error as e:
    print(e)