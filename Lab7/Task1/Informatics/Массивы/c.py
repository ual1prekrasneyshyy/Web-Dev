n = int(input())

arr = list(map(int, input().split()))

c = 0

for a in arr:
    if a > 0:
        c += 1

print(c)
