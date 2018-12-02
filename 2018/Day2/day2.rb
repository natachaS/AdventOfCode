input = File.read('day2.txt').chomp.split("\n")

twos = 0
threes = 0
input.each do |grp|
  twos += 1 if grp.each_char.select { |char| grp.count(char) if grp.count(char) == 2 }.uniq.count > 0
  threes += 1 if grp.each_char.select { |char| grp.count(char) if grp.count(char) == 3 }.uniq.count > 0
end
solution = twos * threes

puts solution

# Part 2

input.each_with_index do |set, i|
    input[i + 1..input.size].each do |followingSet|
      diff = set.each_char.with_index.count { |c, j| c != followingSet.chars[j] }
      if diff == 1
        arr1 = set.split('')
        arr2 = followingSet.split('')
        intersection = arr1 & arr2
        solution = intersection.join('')
        puts solution
      end
    end
  end
  