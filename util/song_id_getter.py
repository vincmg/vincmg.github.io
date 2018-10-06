#!/usr/bin/env python3

import argparse
import sys

file_table = "file_id_list_google_sheet.csv"

def get_url(song):
    format_string = "https://drive.google.com/uc?export=download&id={}"
    with open(file_table, 'r') as file_dict:
        for line in file_dict:
            filename, idstr = line.strip().split(',')
            if song in filename.lower().replace('_', ' '):
                print(format_string.format(idstr))
                return

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('songname')

    args = parser.parse_args()
    if args.songname:
        get_url(args.songname)

if __name__ == '__main__':
    main()