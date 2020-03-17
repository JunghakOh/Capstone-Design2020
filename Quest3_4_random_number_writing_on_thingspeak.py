import time
import random
import requests
for i in range(10):
	value=random.randint(1,20)
	requests.get ("https://api.thingspeak.com/update?api_key=CZZ9U5MQYI3OQ7DN&field1="+str(value))
	time.sleep(20)
