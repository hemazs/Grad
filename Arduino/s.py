from time import sleep
import serial
import serial.tools.list_ports
import os
import re

def search_for_ports():
    ports = list(serial.tools.list_ports.comports())
    return ports

def is_valid_cu_string(s):
    pattern = r'^CU\d{7}$'
    return re.match(pattern, s) is not None

def clean_string(s):    
    s = s.strip()
    s = s[8:17]
    return s


if __name__ == "__main__":


    try:
        serial_conn = serial.Serial("COM3", 9600)
    except:
        print('\nCant connect to port {}'.format(serial.PortNotOpenError))
        exit(0)

    count = 0
    while not serial_conn.is_open:
        sleep(0.1)
        if count == 10:
            print('\nTimed out')
            exit(0)

    print('\nconnection established') 

    while serial_conn.is_open:
            try:
                st = serial_conn.readline()
                st = str(st)
                st = clean_string(st)
                if is_valid_cu_string(st):
                        os.system(f"start opera http://localhost:3000/646598c8eba54d3c0cbc7178")
                        exit()
                else:
                        print("Not a valid CU string")
            except:
                break

    print('\nconnection lost')
    exit(0) 