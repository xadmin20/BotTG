db_conf = {
    "host": "141.8.192.169",
    "user": "a0543466_bot",
    "password": "afitiwedru"
}

admins = ["91124946"]

def is_admin(ids):
    if str(ids) in admins:
        return True
    else:
        return False

