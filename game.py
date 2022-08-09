import random
import sqlite3

import telebot
import datetime, time
from keyboa.keyboards import keyboa_maker
from telebot import types
from telebot import TeleBot

import game_db
import game_victor
import order.order
import order

bot = telebot.TeleBot('1450495246:AAGQxl6uESY-VtdXJI9Uj-pLipCP7sSQfWg')
score_game = 0
timing = 0
time_start = 0
time_finish = 0
zap_d, zap_t = "", ""




@bot.message_handler(commands=['start'])
def start(message):
    users = game_db.db_start(message.chat.id)
    fruits_with_ids = [
        {"Старт": "start"}, {"Мои очки": "score"},
        {"Информация": "info"}, {"Викторина": "victorina"}, {"Запись": "zapis"}]
    kb_fruits = keyboa_maker(items=fruits_with_ids, items_in_row=2)
    textsend = message.chat.first_name + " Хай :) нажми на кнопку"
    bot.send_message(chat_id=message.chat.id, reply_markup=kb_fruits, text=textsend)


@bot.callback_query_handler(func=lambda call: True)
def callback_worker(call):
    global time_start
    time_start = int(time.time())
    print(f'Time start {time_start}')
    if call.data == "start":
        rand = random.randint(1, 100)
        msg = bot.send_message(call.message.chat.id, f'Пожалуйста введите число {call.data}')
        bot.register_next_step_handler(msg, start_game, rand)
    elif call.data == "score":
        score_all = game_db.db_score(call.message.chat.id)
        msg = f"Вы набрали {score_all[3]}, за {score_all[2]} секунд игры"
        bot.send_message(call.message.chat.id, msg)
    elif call.data == "info":
        bot.send_message(call.message.chat.id, f'Info')
    elif call.data == "victorina":
        game_vic = game_victor.random_line()
        print(type(game_vic))
        game_start = game_vic.split("|")
        print(game_start)
        question = game_start[0]
        answer = game_start[1].strip("")
        msg = bot.send_message(call.message.chat.id, f'Внимание вопрос {question} - {answer}')
        bot.register_next_step_handler(msg, victorina, game_vic)
    elif call.data == "zapis":
        print(f"Zapis {call.message.chat.id}")
        bot.send_message(call.message.chat.id, f'Пожалуйста введите удобное '
                                               f'для Вас дату записи в формате 01.01. {order.a}')



def zapis(message):
    msg = order.order.a
    bot.send_message(message.chat.id, f'{msg}')


def start_game(message, rand):
    global score_game, time_finish
    try:
        a = int(message.text)
        b = rand
        print(b)
        if a > b:
            score_game -= 1
            msg = bot.send_message(message.chat.id, f'Down, Ваши очки {score_game}')
            bot.register_next_step_handler(msg, start_game, b)
        elif a < b:
            score_game -= 1
            msg = bot.send_message(message.chat.id, f'UP, Ваши очки {score_game}')
            bot.register_next_step_handler(msg, start_game, b)
        elif a == b:
            time_finish = int(time.time())
            time_game = time_finish - time_start
            print(f"{time_finish} - {time_start} ")
            score_game += 5
            game_db.db_score_add(message.chat.id, score_game, time_game)
            fruits_with_ids = [
                {"Старт": "start"}, {f"Список игр": "list_game"},
                {"Информация": "info"}, {"Score": "score"}, ]
            kb_fruits = keyboa_maker(items=fruits_with_ids, items_in_row=1)
            textsend = message.chat.first_name + f"Ты выиграл {score_game} за {time_game} секунд, может еще поиграем?"
            bot.send_message(chat_id=message.chat.id, reply_markup=kb_fruits, text=textsend)
    except:
        msg = bot.send_message(message.chat.id, f'Соори, это же не число: {message.text}, введите пожалуйста число!')
        bot.register_next_step_handler(msg, start_game, rand)

def victorina(message, game_vic):
    print("vic")
    game_vic = game_victor.random_line()
    game_vic.split("|")
    question = game_vic[0]
    answer = game_vic[1].strip("")
    print(answer)
    print(message.text.lower())
    if message.text.lower() == answer.lower():
        bot.send_message(message.chat.id, f"yes")
    else:
        msg = bot.send_message(message.chat.id, f'Еще разок')
        bot.register_next_step_handler(msg, victorina, game_vic)


def zapis_date(message):
    global zap_d
    msg = bot.send_message(message.chat.id, f'Пожалуйста введите удобное для Вас дату записи в формате 01.01. ')
    bot.register_next_step_handler(msg, zapis_time)

    
def zapis_time(message):
    global zap_t
    print(f"Zapis: ")



if __name__ == "__main__":
    print("Start Bot")
    bot.polling(none_stop=True, interval=0)