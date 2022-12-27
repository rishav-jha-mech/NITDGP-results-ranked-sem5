import json
def passedStudentsOnly():
    with open("_rawData.txt", "r",encoding="utf-8") as info:
        for line in info:
            x = line.split()
            if x[-1] != "Passed":
                continue
            f = open("passedStudents.txt", "a")
            listToStr = ' '.join(map(str, x))
            f.write(f"{listToStr}\n")
            f.close()

def main():
    subjectCodes = ['BT','CE','CH','CS','EC','EE','ME','MM']
    rankingCriteria = ['CGPA','SGPA']
    # Ask user to select a subject code
    for i in range(10):
        print(f"{i} {subjectCodes[i]}")
    print("\n")
    subjectInt = int(input("\nEnter Subject sl. no. whose rank you want  "))
    print("\n\n")

    for i in range(2):
        print(f"{i} {rankingCriteria[i]}")
    criteriaInt = int(input("\n\nEnter the criteria of sorting   "))
    print("\n")
    if subjectInt < 0 or subjectInt > 9:
        print("Enter valid subject code")
        return
    if criteriaInt < 0 or criteriaInt >1:
        print("Enter valid criteria code")
    else:
        resultsDict = {}
        sortedList = []
        with open("passedStudents.txt", "r",encoding="utf-8") as info:
            if criteriaInt == 0:
                cry = -2
            else:
                cry = -3
            count = 0
            for line in info:
                x = line.split()
                if subjectCodes[subjectInt] == x[1]:
                    count += 1
                    resultsDict[count] = x[1:]
            
            # print(json.dumps(resultsDict,indent=4))
            # print(count)
        # Sorting according to CGPA or maybe SCGPA
        sortedList = sorted(resultsDict, key=lambda x : resultsDict[x][cry],reverse=True)
        # print(json.dumps(sortedList,indent=4))

        for key in sortedList:            
            f = open(f"Ranked-{subjectCodes[subjectInt]}-{rankingCriteria[criteriaInt]}-Sem5.txt", "a")
            listToStr = ' '.join(map(str, resultsDict[key]))
            f.write(f"{listToStr}\n")
            f.close()

# passedStudentsOnly()
main()