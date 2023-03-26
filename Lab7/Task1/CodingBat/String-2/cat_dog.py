def cat_dog(str):
    cats = 0
    dogs = 0

    for i in range(len(str)-2):
        cats += str[i:i+3] == 'cat'
        dogs += str[i:i+3] == 'dog'

    return cats == dogs


print(cat_dog('catdog'))
print(cat_dog('catcat'))
print(cat_dog('1cat1cadodog'))