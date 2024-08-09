# This is a script that will update the json file(this acts like a config file)
import json
import datetime

JSON_PATH = "scripts/config.json"
d = datetime.datetime.now()

with open(JSON_PATH, "r", encoding="utf-8") as json_fp:
    json_data = json_fp.read()

data = json.load(json_data)

data["in_devel"] = False
data["export_date"] = f"{d.year}-{d.month}-{d.day}"
data["export_time"] = f"{d.hour}:{d.minute}:{d.second}"

with open(JSON_PATH, "w", encoding="utf-8", newline="\n") as final_json_fp:
    json.dump(data, final_json_fp, indent=4)
