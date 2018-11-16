mes = 'Call me at 415-555-1011 tomorrow. 415-555-9999 is my office'
for i in range(len(mes)):
	chunk = mes[i:i+12]
	if isPho(chunk):
		print('Phone number found: ' + chunk)
print('Done')
