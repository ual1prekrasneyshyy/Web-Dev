n = int(input())

arr = list(map(int, input().split()))

m = 0

for i in range(1, n-1):
    if arr[i] > arr[i-1] and arr[i] > arr[i+1]   :
        m += 1

print(m)
