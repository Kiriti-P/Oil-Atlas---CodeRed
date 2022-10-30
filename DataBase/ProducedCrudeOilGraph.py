
import matplotlib.pyplot as plt
import json
import sys
import time


def graphData():
    jsonfile = open("ProducedCrudeData.json", "r")
    jsondata = jsonfile.read()

    data_dict = json.loads(jsondata)

    x = []
    y = []

    for i in data_dict["Data 1"]:
        x.append(i["Date"])

    for i in data_dict["Data 1"]:
        y.append(i["U.S. Field Production of Crude Oil (Thousand Barrels)"])

    plt.plot(x, y)
    plt.xlabel('Years')
    plt.ylabel('Oil Produced')
    plt.title("U.S. Field Production of Crude Oil (Thousand Barrels)")
    plt.savefig("ProducedCrude.png")
    plt.show()
    jsonfile.close()


if __name__ == '__main__':
    try:
        graphData()
    except KeyboardInterrupt:
        print >> sys.stderr, '\nExiting by user request.\n'
        sys.exit(0)
