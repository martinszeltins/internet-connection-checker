#!/bin/bash

# Get the current date and time to create a unique log file
DATETIME=$(date '+%Y-%m-%d_%H-%M')
LOG_FILE="$HOME/internet-availability-$DATETIME.txt"

# Function to log internet status
log_status() {
    local status="$1"
    local timestamp=$(date '+%Y-%m-%d %H:%M')
    echo "[$timestamp] $status"
    echo "[$timestamp] $status" >> "$LOG_FILE"
}

# Function to check internet availability
check_internet() {
    local check1 check2 check3 check4

    ping -c 1 google.com &> /dev/null
    check1=$?

    sleep 5

    curl --max-time 6 --connect-timeout 6 --retry 0 -s https://www.apple.com | grep -i "<html" &> /dev/null
    check2=$?

    sleep 5

    curl --max-time 6 --connect-timeout 6 --retry 0 -s https://www.google.com | grep -i "<html" &> /dev/null
    check3=$?

    curl --max-time 6 --connect-timeout 6 --retry 0 -s https://github.com | grep -i "<html" &> /dev/null
    check4=$?

    # Determine overall status
    if [[ $check1 -eq 0 && $check2 -eq 0 && $check3 -eq 0 && $check4 -eq 0 ]]; then
        log_status "Online"
    else
        log_status "Offline"
    fi
}

# Infinite loop to check internet availability every minute
while true; do
    check_internet
    sleep 30
done
