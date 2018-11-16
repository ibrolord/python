inv = {'rope': 1, 'torch': 6, 'gold coin': 42, 'dagger': 1, 'arrow': 12}

def invet(ina):
	print("inventory:")
	item = 0
	for k, v in ina.items():
		print(str(v) + '  ' + k)
		item =+ v
	print("Total # of items: " + str(item))

invet(inv)

drag = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby']

def addinv(invi, added):
	
invo = {'gold coin': 42, 'rope': 1}
drag = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'gold coin', 'ruby']
invo = addinv(invo, drago)
invet(invo)





