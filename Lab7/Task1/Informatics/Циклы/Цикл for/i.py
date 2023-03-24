x = int(input())

c = 0

for i in range(1, int(x**0.5)):
    if x % i == 0:
        c += 2

if (x**0.5).is_integer():
    c += 1

print(c)
