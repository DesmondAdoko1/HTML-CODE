problems = "broke, single, unemployed"
print(problems)

l = problems.split(", ")
print(l)

joint = " and ".join(l)
print (joint)


person1 =("john", 24, "pizza")
person2 =("joey", 14, "pizza")

person = (person1, person2)
print (person)

for name, age, food in person:
    print(name)
    print(age)
    print(food)
    print()