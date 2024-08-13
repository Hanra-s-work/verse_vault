# This is a script that will update the json file(this acts like a config file)

import os
import json
import datetime
import subprocess
from sys import argv

CWD = argv[1]

# data = subprocess.run("tree", shell=True, capture_output=True, text=True)
# data2 = subprocess.run(f"cd {CWD} & tree", shell=True,
#                        capture_output=True, text=True)
# fold_content = data.stdout

# # print(f"path = {fold_content}")
# raise RuntimeError(
#     f"cwd = {os.getcwd()}, path = {fold_content}, argv = {
#         argv}, argc = {len(argv)}, data2 = {data2.stdout}"
# )
# exit(0)
JSON_PATH = f"{CWD}/assets/js/scripts/config.json"
d = datetime.datetime.now()

with open(JSON_PATH, "r", encoding="utf-8") as json_fp:
    data = json.load(json_fp)


data["in_devel"] = False
data["export_date"] = f"{d.year}-{d.month:02d}-{d.day:02d}"
data["export_time"] = f"{d.hour:02d}:{d.minute:02d}:{d.second:02d}"

with open(JSON_PATH, "w", encoding="utf-8", newline="\n") as final_json_fp:
    json.dump(data, final_json_fp, indent=4)

print("JSON file updated successfully.")

# Creating the custom 404 error page redirect

PAGE_404 = """
---
permalink: /error/404/index.html
layout: default
title: "404: Not Found"
---

# 404 - Page Not Found
Sorry, the page you are looking for does not exist.
Return [home](/)
"""

with open(f"{CWD}/404.md", "w", encoding="utf-8", newline="\n") as error_page:
    error_page.write(PAGE_404)
