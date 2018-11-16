arr=("201" "202" "203" "204" "205")
IPADDR=192.168.0

for i in ${!arr[*]}; do
	echo "$IPADDR.${arr[$i]}" ;
done
