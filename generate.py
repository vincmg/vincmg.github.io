#!/usr/bin/env python3

import json
from jinja2 import Environment, FileSystemLoader, select_autoescape

if __name__ == '__main__':
    with open('./json/album_list.json', 'r') as album_file:
        album_list = json.load(album_file)
    with open('./json/compo_list.json', 'r') as compo_file:
        compo_list = json.load(compo_file)
    with open('./json/commission_list.json', 'r') as commission_file:
        commission_list = json.load(commission_file)
    with open('./json/song_list.json', 'r') as song_file:
        song_list = json.load(song_file)
    with open('./json/news_list.json', 'r') as news_file:
        news_list = json.load(news_file)

    # raw json files are sorted by ascending date
    album_list.reverse()
    compo_list.reverse()
    commission_list.reverse()

    # raw json file is sorted by song name
    song_list.sort(key=lambda song: song['date'], reverse=True)

    env = Environment(
            loader=FileSystemLoader('./templates/'),
            autoescape=select_autoescape(['html', 'xml']),
            trim_blocks=True,
            lstrip_blocks=True,
    )
    template = env.get_template('index.html.jinja')

    rendered_page = template.render(news=news_list, albums=album_list, compilations=compo_list, commissions=commission_list, songs=song_list)

    with open('./index.html', 'w') as outfile:
        outfile.write(rendered_page)
