def make_chocolate(small, big, goal):
    goal -= min(big, goal // 5) * 5

    if goal <= small:
        return goal
    return -1


print(make_chocolate(4, 1, 9))
print(make_chocolate(4, 1, 10))
print(make_chocolate(4, 1, 7))