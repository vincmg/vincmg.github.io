#!/usr/bin/env python3

import json
from jinja2 import Environment, FileSystemLoader, select_autoescape

def generate_page(jinja_env: Environment, template_filepath: str, params: dict) -> None:
    assert(template_filepath.endswith('.jinja'))
    page_url = template_filepath.rsplit('.', maxsplit=1)[0]
    page = env.get_template(template_filepath)
    rendered = page.render(**params)
    with open(page_url, 'w') as outfile:
        outfile.write(rendered)
    print('generated page', page_url)
    

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
    news_list.reverse()

    # raw json file is sorted by song name
    song_list.sort(key=lambda song: song['date'], reverse=True)

    env = Environment(
            loader=FileSystemLoader('./templates/'),
            autoescape=select_autoescape(['html', 'xml']),
            trim_blocks=True,
            lstrip_blocks=True,
    )

    news_display_count = 5 # number of most recent posts to show on the homepage; the rest will be on the news page
    generate_page(env, 'index.html.jinja', dict(news=news_list, albums=album_list, compilations=compo_list, commissions=commission_list, songs=song_list, news_count=news_display_count))

    generate_page(env, 'news.html.jinja', dict(news=news_list))

    generate_page(env, 'rss.xml.jinja', dict(posts=news_list))
