import random


def random_line():
    try:
        with open("baza.txt", "r", encoding="cp1251") as afile:
            line = next(afile)
            for num, aline in enumerate(afile, 2):
                if random.randrange(num):
                    continue
                line = aline

            return line
    except StopIteration:
        return


random_line()