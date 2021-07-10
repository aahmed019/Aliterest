# json.extract! @reviews, :id, :title, :body

@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :id, :title, :body, :author_id
    end
end