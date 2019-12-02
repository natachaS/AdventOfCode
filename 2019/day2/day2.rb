data = File.read('day2.txt').split(?,).map(&:to_i)

data[1]=12
data[2]=2
i=0

while data[i] != 99 do
    if data[i] == 1
        data[data[i+3]] = data[data[i+1]]+data[data[i+2]]
        i+=3
    end
    if data[i] == 2
        data[data[i+3]] = data[data[i+1]]*data[data[i+2]]
        i+=3
    end
    i+=1

end

puts "Part 1 solution is #{data[0]}"

