def make_bricks(small, big, goal):
    goal -= min(big, goal//5) * 5

    return goal <= small


print(make_bricks(3, 1, 8))
print(make_bricks(3, 1, 9))
print(make_bricks(3, 2, 10))