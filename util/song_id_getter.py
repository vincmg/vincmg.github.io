#!/usr/bin/env python3

import argparse
import sys
import json

file_table = "file_id_list_google_sheet.csv"
song_list_json = "song_list.json"

def get_url(song, output=False) -> str:
    format_string = "https://drive.google.com/uc?export=download&id={}"
    with open(file_table, 'r') as file_dict:
        for line in file_dict:
            filename, idstr = line.strip().split(',')
            if song in filename.lower().replace('_', ' '):
                if output:
                    print(format_string.format(idstr))
                return format_string.format(idstr)

def make_json():
    with open(song_list_json, 'r') as infile:
        song_list = json.load(infile)

    for song in song_list:
        dl_url = get_url(song['name'].lower())
        if dl_url is None:
            print("Unable to find", song['name'].lower())
        else:
            song['link'] = dl_url
    with open("../js/song_list.json", 'w') as outfile:
        json.dump(song_list, outfile)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--get', dest="songname")

    args = parser.parse_args()
    if args.songname:
        get_url(args.songname)
    else:
        make_json()

if __name__ == '__main__':
    main()