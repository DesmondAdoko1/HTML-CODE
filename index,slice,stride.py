name = "desmond descorp"
#slicing
print(name[0:11])

#striding
print(name[0:11:3])

for a in range(len(name)):
    print(name[:a])

digits =(0,1,2,3,4,5,6,7,8,9)

window_size = 4
for b in range(len(digits) -3):
    print(digits[b:b+window_size])