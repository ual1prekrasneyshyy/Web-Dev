if __name__ == '__main__':
    N = int(input())

    li = []

    for i in range(N):
        command = input()

        if 'insert' in command:
            i, e = map(int, command.split()[1:])
            li.insert(i, e)
        elif 'print' in command:
            print(li)
        elif 'remove' in command:
            e = int(command.split()[1])
            li.remove(e)
        elif 'append' in command:
            e = int(command.split()[1])
            li.append(e)
        elif 'sort' in command:
            li.sort()
        elif 'pop' in command:
            li.pop()
        elif 'reverse' in command:
            li.reverse()
