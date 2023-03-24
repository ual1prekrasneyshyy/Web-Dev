n = input()

d = 0

for i in range(len(n)):
    if n[-1-i] == '1':
        d += 2**i

print(d)
