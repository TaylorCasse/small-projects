# Python3 code to demonstrate working of
# Business time in range
# Using timedelta() + weekday()
from datetime import datetime, timedelta

##########################

# To do: 
# Account for minutes and seconds during start and end dates
# Change working time range to generate date objects?
# Figure out date object methods, should allow for a more elegant solution

##########################

# initializing dates ranges
working_time_range = range(9, 17)
start_date, end_date = datetime(2022, 4, 16, 10, 2, 3), datetime(2022, 4, 22, 9, 3, 3)

# printing dates
print("The original range : " + str(start_date) + " " + str(end_date))
  
# generating dates
dates = (start_date + timedelta(idx + 1) for idx in range(end_date.day - start_date.day))

weekdays = 0
for date in dates:
    if date.weekday() < 5:
        weekdays += 1

# determine number of working hours on the start date
start_day_hours = 0
if start_date.hour <= working_time_range[0] or not start_date.weekday() < 5:
    start_day_hours = len(working_time_range)
elif start_date.hour in working_time_range:
    start_day_hours = len(range(start_date.hour, (working_time_range[-1] + 1)))


# determine the working hours on the end date
end_day_hours = 0
if end_date.hour in working_time_range:
    end_day_hours = len(range(working_time_range[0], end_date.hour))
elif end_date.hour >= working_time_range[1]:
    end_day_hours = len(working_time_range)

# determine working hours between start and end date if applicable
other_day_hours = 0
if weekdays > 2:
    res2 = range(weekdays - 2)
    for day in res2:
        other_day_hours += len(working_time_range)

hours_tot = start_day_hours + end_day_hours + other_day_hours

delta_m = end_date.minute - start_date.minute
if delta_m >= 0:
    minutes_tot = delta_m
else:
    minutes_tot = 60 + delta_m
    hours_tot -= 1

delta_s = end_date.second - start_date.second
if delta_s >= 0:
    seconds_tot = delta_s
else:
    seconds_tot = 60 + delta_s
    minutes_tot -= 1
 
# accounts for if the project starts and ends on the same day
if (start_date.day, start_date.month, start_date.year) == (end_date.day, end_date.month, end_date.year):
    hours_tot = end_date.hour - start_date.hour

# printing
#print("Start day hours: " + str(start_day_hours))
#print("Working hours inbetween: " + str(other_day_hours))
#print("End day hours: " + str(end_day_hours))
print("Total business time in range: " + str(hours_tot) + " hour(s), " +str(int(minutes_tot)) + " minute(s), " + str(seconds_tot) + " second(s).")