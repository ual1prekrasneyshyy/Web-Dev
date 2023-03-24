def front_times(str, n):
    if len(str) > 3:
        str = str[:3]

    return str * n


print(front_times('Room', 5))