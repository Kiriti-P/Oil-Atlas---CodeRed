
import openpyxl
import pandas as pd
file = "MCRFPUS1m.xlsx"
data = pd.ExcelFile(file)
print(data.sheet_names)

df = data.parse("Data 1")
df.info
df.head(10)

ps = openpyxl.load_workbook("MCRFPUS1m.xlsx")
sheet = ps["Data 1"]
print(sheet.max_row)
