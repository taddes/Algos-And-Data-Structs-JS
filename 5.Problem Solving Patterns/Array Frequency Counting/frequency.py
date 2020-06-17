def same(list1, list2):
    if len(list1) != len(list2):
        return False
    for item in list1:
        try:
            print(list1[item])
            print(list2[item **2])
            correct_index = list2[list1[item] ** 2]
            
        except IndexError:
            return False
        list2.pop(correct_index)
    return True


print(same([1,2,3], [4,1,9])) # True
# print(same([1,2,3], [1,9])) # false
# print(same([1,2,2], [4,4,1])) # true