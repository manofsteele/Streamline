json.workouts do
  @workouts.each do |workout|
    json.set! workout.id do
      json.extract! workout, :id, :user_id, :date, :workout_type, :miles, :duration
    end
  end
end

json.users do
  @workouts.each do |workout|
    json.set! workout.user.id do
      json.extract! workout.user, :id, :username
      if workout.user.image.present?
        json.photoUrl url_for(workout.user.image)
      end
    end
  end
end
