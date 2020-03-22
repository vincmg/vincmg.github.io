#!/usr/bin/env python3

import json
import sys
import re

patt = re.compile('^.*vincmg/(.*)$')

if __name__ == '__main__':
    with open(sys.argv[1], 'r') as song_list:
        json_obj = json.load(song_list)
        for entry in json_obj:
            if 'link' in entry.keys() and 'soundcloud' in entry['link']:
                match = patt.match(entry['link'])
                if match:
                    song_name = match.group(1)
                    new_name = song_name.replace('-', '_')
                    new_name = "mp3/vince_kaichan_-_" + new_name + ".mp3"
                    entry['link'] = new_name

    with open(sys.argv[1][0:-5], 'w') as out_file:
        json.dump(json_obj, out_file, indent=4)