#!/usr/bin/env python3

import json
from jinja2 import Environment, FileSystemLoader, select_autoescape

# TODO TODO
# figure out how to attach the event listeners in the template
# load and format song list

if __name__ == '__main__':
    with open('./json/album_list.json', 'r') as album_file:
        album_list = json.load(album_file)
    with open('./json/compo_list.json', 'r') as compo_file:
        compo_list = json.load(compo_file)
    with open('./json/commission_list.json', 'r') as commission_file:
        commission_list = json.load(commission_file)
    with open('./json/song_list.json', 'r') as song_file:
        song_list = json.load(song_file)

    # raw json files are sorted by ascending date
    album_list.reverse()
    compo_list.reverse()
    commission_list.reverse()

    # TODO sort song list by descending date; raw json file is sorted by song name
    # song_list.sort(TODO)

    env = Environment(
            loader=FileSystemLoader('./templates/'),
            autoescape=select_autoescape(['html', 'xml']) # TODO is this necessary?
    )
    template = env.get_template('index.html.jinja')

    rendered_page = template.render(albums=album_list, compilations=compo_list, commissions=commission_list)
    print(rendered_page)

    with open('./index.html', 'w') as outfile:
        outfile.write(rendered_page)
