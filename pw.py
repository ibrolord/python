#! python3
# pw.py	-  An insecure password locker program.

PASS = {'email': '#(*HJ(#((F*',
	'blog': '#(JF#)H)H$(*#HBCI',
	'luggage': '12345'}


import sys
if len(sys.argv) < 2:
	print('Usage: python pw.py [account] - copy account password')
sys.exit()

account = sys.argv[1] 	#1st cmd line arg is the acct name

if account in PASS:
	pyperclip.copy(PASS[[account]}
	print('Password for ' + account + ' copied to clipboard.')
else:
	print
