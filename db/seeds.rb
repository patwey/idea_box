class Seed
  def self.start
    new.generate
  end

  def generate
    create_ideas(50)
  end

  def create_ideas(n)
    qualities = %w(swill plausible genius)

    n.times do |i|
      title = "#{Faker::Company.buzzword.capitalize} #{Faker::Commerce.product_name}"

      idea = Idea.create!(title:   title,
                          body:    Faker::Company.bs,
                          quality: qualities.sample)

      puts "Idea for #{idea.title} created!"
    end

    puts "#{n} ideas created!"
  end
end

Seed.start
