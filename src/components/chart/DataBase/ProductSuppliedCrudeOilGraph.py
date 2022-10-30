
import matplotlib.pyplot as plt
import mpld3
import json
import sys


def graphData():
    jsonfile = open("ProductSuppliedCrudeData.json", "r")
    jsondata = jsonfile.read()

    data_dict = json.loads(jsondata)

    x = []
    y = []

    for i in data_dict["Data 1"]:
        x.append(i["Date"])

    for i in data_dict["Data 1"]:
        y.append(
            i["U.S. Product Supplied of Crude Oil and Petroleum Products (Thousand Barrels)"])

    plt.plot(x, y)
    plt.xlabel('Years')
    plt.ylabel('Product Supplied')
    plt.title(
        "U.S. Product Supplied of Crude Oil and Petroleum Products (Thousand Barrels)")
    # plt.savefig("ProductSupplied.png")
    # plt.show()
    mpld3.fig_to_html(mpld3)
    jsonfile.close()


if __name__ == '__main__':
    try:
        graphData()
    except KeyboardInterrupt:
        print >> sys.stderr, '\nExiting by user request.\n'
        sys.exit(0)
