for datafile in "$@"
do
	echo $datafile "is being  processed"
	bash goostats.sh $datafile stats-$datafil
	echo $datafile "is processed"
done
