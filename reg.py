def isPhone(text):
	if len(text) != 12:
		return False
	for i in range(0, 3):
		if not text[i].isdecimal():
			return False
	if text[3] != '-':
		return False
	for i in range(4, 7):
		if not text[i].isdecimal():
			return False
	if text[7] != '-':
		return False
	for i in range(8, 12):
		if not text[i].isdecimal():
			return False
	return True

print('415-555-4242 is a phone number:')
print(isPhone('415-555-4242'))
print('Moshi moshi is a phone #:')
print(isPhone('Moshi Moshi'))

mes = 'Call me at 415-555-1011 tomorrow. 415-555-9999 is my office'
for i in range(len(mes)):
	chunk = mes[i:i+12]
	if isPhone(chunk):
		print('Phone number found: ' + chunk)
print('Done')
print(str(len(mes)))
