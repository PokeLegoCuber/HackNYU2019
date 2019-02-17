import subprocess
import os
import json

def getcode(filename):
  res = subprocess.run(['zbarimg', filename], stdout=subprocess.PIPE)
  outlines = res.stdout.decode('utf-8').split()
  if len(outlines) != 0:
    return outlines[0].split(':')[-1]
  else:
    return False

def getinfo(code):
  infojson = open('infomap.json').read()
  infomap = json.loads(infojson)
  infolist = [e for e in infomap if e['upc'] == code]
  if len(infolist) == 1:
    return infolist[0]
  elif len(infolist) == 0:
    return False
  else:
    raise ValueError('infomap should not have multiple entries with same key.')

if __name__ == "__main__":
  code = getcode("test.jpg")
  print(code)
  info = getinfo(code)
  print(info)


