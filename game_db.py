import sqlite3


def add_db():
    try:
        conn = sqlite3.connect('users.db')
        cur = conn.cursor()
        cur.execute("""CREATE TABLE IF NOT EXISTS game_tg(
           id INT PRIMARY KEY AUTOINCREMENT,
           id_telegram INT,
           time_sec INT,
           score INT);
        """)
        conn.commit()
    except:
        print("error db")
    finally:
        print("dc ok")
        


def db_user_list():
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("SELECT * FROM game_tg;")
    all_results = cur.fetchall()
    print(all_results)
    conn.commit()


def db_user_add(id_tel, score, time_game):
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    sql_update_query = f"""UPDATE game_tg SET score = {score}, time_sec = {time_game} WHERE id_telegram = {id_tel}"""
    cur.execute(sql_update_query)
    # cur.execute("INSERT INTO game_tg VALUES(?, ?, ?, ?);", user)
    conn.commit()


def db_start(id_tel):
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("SELECT id_telegram FROM game_tg;")
    records = cur.fetchall()
    addlist = []
    for i in records:
        addlist.append(i[0])
    print(addlist)
    if id_tel in addlist:
        print("uzhe est")
    else:
        user = (None, id_tel, 0, 0)
        cur.execute("INSERT INTO game_tg VALUES(?, ?, ?, ?);", user)
        conn.commit()


def db_score_add(id_tel, score, time_game):
    try:
        conn = sqlite3.connect('users.db')
        cur = conn.cursor()
        cur.execute("SELECT score FROM game_tg WHERE id_telegram=?", (id_tel,))
        score_old = cur.fetchone()
        print(score_old[0])
        score_new = int(score_old[0]) + int(score)
        sql_update_query = f"""UPDATE game_tg SET score = {score_new},
         time_sec = {time_game} WHERE id_telegram = {id_tel}"""
        cur.execute(sql_update_query)
        conn.commit()
    except sqlite3.Error as er:
        print(er)


def db_score(id_tel):
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    cur.execute("SELECT * FROM game_tg WHERE id_telegram=?", (id_tel,))
    score_old = cur.fetchone()
    return score_old



# db_user_list()
# db_score_add(4444, 22, 0)
db_score(91124946)
