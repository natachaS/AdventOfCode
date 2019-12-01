part1 = File.readlines('data.txt').map(&:to_i).map{ |mod| (mod/3)-2 }.inject(0, &:+)
puts part1

new_arr=[]

File.readlines('data.txt').map(&:to_i).each  do |x|
    while x > 0  do
        x =(x/3)-2
        if x > 0
            new_arr.push(x)
        end
    end
end
part2 = new_arr.inject(0, &:+)
puts part2
