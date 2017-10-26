if user.name
  n = user.name
else
  n= ""
end

json.extract! user, :email, :id
json.name n
