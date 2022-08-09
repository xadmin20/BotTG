import requests
import lxml
from bs4 import BeautifulSoup
from datetime import datetime

def info_gb():
    try:
        with open("gb.html", "r", encoding="utf-8") as file:
            contens = file.read()
            soup = BeautifulSoup(contens, 'lxml')
            quotes = soup.find_all('div', class_='_7515')
            calendar_all = soup.find_all('div', class_='_88d6')
            for i in calendar_all:
                if i.find('h4') is not None:
                    # print(i)
                    dates = i.find('div', class_='dab5').text
                    titles = i.find('h4').text
                    times = i.find('time').text
                    descp = i.find('p').text
                    links = i.find('a', href=True)
                    if is_date(dates):
                        print(f'!!!Сегодня: {dates} + {times} + {titles} + {descp} + {links["href"]}')
                    # else:
                    #     print(f'{dates} + {times} + {titles} + {descp} + {links["href"]}')
                    #     print("###")
    except:
        print("error")


def is_date(info_zapros):
    list_mounth = ["января,", "февраля,", "марта,", "апреля,", "мая,", "июня,", "июля,", "августа,", "сентября,",
                   "октября,", "ноября,", "декабря,", ]
    current_date = datetime.now()
    str_mounth = current_date.strftime('%m')
    str_today = current_date.strftime('%d')
    if str_today[0] == "0":
        str_today = str_today[1]
    if str_mounth[0] == "0":
        str_mounth = str_mounth[1]


    for i in str_mounth:
        if info_zapros.split(" ")[1] == list_mounth[int(i)-1]:
            if info_zapros.split(" ")[0] == str_today[0]:
                return True
            else:
                return False
        else:
            return False


info_gb()
