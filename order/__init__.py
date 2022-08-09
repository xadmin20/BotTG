"""
функция записи на консультуцию
"""
import os
import sqlite3
import time


def entry_creat():
    try:
        with sqlite3.connect("users.db") as con:
            cur = con.cursor()
            cur.execute("""CREATE TABLE IF NOT users(
       ID INTEGER PRIMARY KEY AUTOINCREMENT,
       NAME           TEXT      NOT NULL,
       AGE            TEXT       NOT NULL
            );
            """)
            con.commit()
            print("Created DB")

    except sqlite3.Error as err:
        print(err)
    finally:
        print("fin")


def entry_add():
    con = sqlite3.connect("users.db")
    cur = con.cursor()
    # INSERT INTO COMPANY (NAME,AGE,ADDRESS,SALARY)
    # VALUES ( 'James', 24, 'Houston', 10000.00 );
    user = ("nick", "36")
    cur.execute("INSERT INTO 'users' (NAME, AGE) VALUES ('nick', '36')")
    con.commit()


def entry_list():
    try:
        con = sqlite3.connect("users.db")
        cur = con.cursor()
        cur.execute("SELECT * FROM users;")
        one_result = cur.fetchall()
        print(one_result)
    except:
        print("SQL ERROR")


def entry_edit():
    with sqlite3.connect("users.db") as con:
        cur = con.cursor()
        edit = "UPDATE ''"


def entry_del():
    pass

def main():
    # entry_creat()
    # time.sleep(1)
    # entry_add()
    # time.sleep(2)
    # entry_list()
    pass


if __name__ == '__main__':
    main()



