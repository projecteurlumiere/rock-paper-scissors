# gives you the longest word of the directory (first input) of a particular extension (2nd input)
# bash longest.ch "directoryname" "file extension"
# word count "files or directory", sorts them numerically (-g), 
# and in reverse order (= from highest to lowest)
# gives the two highest numbers (that include total)
# tail excludes total
wc -l $1/*.$2 | sort -g -r | head -n 2 | tail -n 1
