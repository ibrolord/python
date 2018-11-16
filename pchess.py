the = {'top-L': ' ', 'top-M': ' ', 'top-R': ' ',
	'mid-L': ' ', 'mid-M': ' ', 'mid-R': ' ',
	'low-L': ' ', 'low-M': ' ', 'low-R': ' '}

def prib(board):
	print(board['top-L'] + '|' + board['top-M'] + '|' + board['top-R'])
	print('-+-+-')
	print(board['mid-L'] + '|' + board['mid-M'] + '|' + board['mid-R'])
	print('-+-+-')
	print(board['low-L'] + '|' + board['low-M'] + '|' + board['low-R'])
turn = 'X'
for i in range(9):
	prib(the)
	print('turn for ' + turn + '. Move on which space?')
	move = input()
	the[move] = turn
	if turn == 'X':
		turn = 'O'
	else:
		turn = 'X'
	prib(the)

prib(the)
