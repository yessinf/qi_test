json.extract! location, :id, :user_id, :latitude, :longitude, :link, :created_at, :updated_at
json.url location_url(location, format: :json)
