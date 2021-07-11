# json.extract! @reviews, :id, :title, :body

@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :id, :title, :body, :author_id
        json.extract! review.user, :f_name, :l_name
    end
end