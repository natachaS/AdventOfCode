input = File.read('day3.txt').chomp.split("\n").map do |d|
    d.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/)
  end

hits = Array.new(1000) { Array.new(1000, 0) }

input.map(&:to_a).map { |a| a.map(&:to_i) }.each do |_, _, left, top, width, height|
    (top..top + height - 1).each do |row|
        (left..left + width - 1).each do |col|
            hits[row][col] += 1
        end
    end
end

solution = hits.flatten.count{ |count| count > 1}

puts "Solution for part 1 is #{solution}"


