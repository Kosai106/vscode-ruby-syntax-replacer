@data = [
	{:id => 1, :rating => "down", :location => "Lebanon", :title => "K Frame", :place => "Based in Beirut", :image => "https://images.unsplash.com/photo-1431277366844-244b1451984d?dpr=1&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop=&bg="},
	{:id => 2, :rating => "up", :location => "Germany", :title => "Xolo", :place => "Based in Berlin", :image => "https://images.unsplash.com/photo-1489356943405-f7154378bbb4?dpr=1&auto=format&fit=crop&w=1500&h=997&q=80&cs=tinysrgb&crop=&bg="},
	{:id => 3, :rating => "up", :location => "Germany", :title => "Lichtecht", :place => "Based in Hamburg", :image => "https://images.unsplash.com/photo-1486509556775-a2404e7d7d7d?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="},
	{:id => 4, :rating => "down", :location => "Netherlands", :title => "Triple-D", :place => "Based in Amsterdam", :image => "https://images.unsplash.com/photo-1474606179262-1ac393ca3316?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=&bg="},
	{:id => 5, :rating => "up", :location => "Spain", :title => "Fresh House", :place => "Based in Zaragoza", :image => "https://images.unsplash.com/photo-1483122131250-cd8221698b17?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="},
	{:id => 6, :rating => "down", :location => "Poland", :title => "Motiv", :place => "Based in Gdansk", :image => "https://images.unsplash.com/photo-1484906967222-d2cdcca77bd1?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=&bg="},
	{:id => 7, :rating => "up", :location => "Italy", :title => "Gayarre Infografia", :place => "Based in Venice", :image => "https://images.unsplash.com/photo-1482647397731-1f423251b1c1?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="},
	{:id => 8, :rating => "up", :location => "Italy", :title => "ATviz", :place => "Based in Rome", :image => "https://images.unsplash.com/photo-1479705879471-5afa19ebdcc5?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="}
]

@data.each do |x|
	puts "#{x[:id]}: #{x[:location]} - #{x[:title]}"
end