for sis in Jo Meg Beth Amy
do
	echo $sis:
	grep -ow $sis LittleWomen.txt |wc -l
done
