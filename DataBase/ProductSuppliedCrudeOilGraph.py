
import matplotlib.pyplot as plt
import json

jsonfile = open("DataBase/ProductSuppliedCrudeData.json", "r")
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
plt.show()
plt.savefig("ProductSupplied.png")
jsonfile.close()
