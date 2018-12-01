data = File.readlines('day1.txt').map(&:to_i)
solution = data.inject(0, &:+)
puts  "Solution to Part 1  is #{solution}"

repeat = nil
list = [0]
f = 0

until repeat
  data.each do |nbr|
    f += nbr
    repeat = f if list.include? f
    break if repeat
    list << f
  end
end

puts "Solution to Part 2  is #{repeat}"

