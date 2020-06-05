desc "Ensure that code is not running in production environment"
task :not_production do
  if Rails.env.production? && ENV["DELETE_PRODUCTION_DATA"].blank?
    puts ""
    puts "*" * 50
    puts "Deleting production data is not allowed. "
    puts "If you really want to delete all production data and populate sample data then "
    puts "you can execute following command."
    puts "DELETE_PRODUCTION_DATA=1 rake setup_sample_data"
    puts " "
    puts "If you are using Heroku then execute command as shown below"
    puts "heroku run rake setup_sample_data DELETE_PRODUCTION_DATA=1 -a binary-shortener"
    puts "*" * 50
    puts ""
    throw :error
  end
end

desc "Sets up the project by running migration and populating sample data"
task setup: [:environment, :not_production, "db:drop", "db:create", "db:migrate"] do
  ["setup_data"].each { |cmd| system "rake #{cmd}" }
end

def delete_all_records_from_all_tables
  ActiveRecord::Base.connection.schema_cache.clear!

  Dir.glob(Rails.root + "app/models/*.rb").each { |file| require file }

  ApplicationRecord.descendants.each do |klass|
    klass.reset_column_information
    klass.destroy_all
  end
end

desc "Create sample data"
task setup_data: [:environment, :not_production] do
  delete_all_records_from_all_tables

  urls = [
  "https://bigbinary.com/jobs",
  "https://www.google.com",
  "http://www.youtube.com",
  "http://www.facebook.com",
  "http://www.yahoo.com",
  "http://www.amazon.com",
  "http://www.wikipedia.org"
]

categories = [
  "Astronomy",
  "Telenovella",
  "Sports",
  "Politics",
  "Knowledge"
]

urls.each do |url|
  Url.create!(original: url)
end

categories.each do |category|
  Category.create!(title: category)
end

Url.all.each do |url|
    rand(5...10).times {
      @url = Url.find_by!(id: url.id)
      @url.increment!(:count)
      @counter = Count.create!(url_id: url.id, created_at: rand(1..90).days.ago)
    }
  end

end