import os, sys
activate_this = '/home/a0543466/python/bin/activate_this.py'
with open(activate_this) as f:
   exec(f.read(), {'__file__': activate_this})
sys.path.insert(0, os.path.join('/home/a0543466/domains/psychologanna.ru/public_html/'))
from app import app as application
if __name__ == "__main__":
    application.run()