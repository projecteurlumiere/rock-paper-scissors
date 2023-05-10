for sisters in "Jo" "Meg" "Beth" "Amy"
do
	grep -w -i $sisters LittleWomen.txt | wc -l  > result_$sisters.txt 
	cat result_$sisters.txt >> result.txt
	echo "is" $sisters"'s result" >> result.txt
	rm result_$sisters.txt
done
