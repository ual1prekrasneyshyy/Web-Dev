def front3(str):
    if (len(str) > 3):
        str = str[:3]

    return str * 3


print(front3('Chocolate'))