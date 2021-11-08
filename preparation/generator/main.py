from tqdm import tqdm
import pathlib
from image_generator import gen_image
from json_generator import gen_json
import json

path = pathlib.Path('metaplex_format/')
path.mkdir(parents=True, exist_ok=True)


for i in tqdm(range(10_000)):
    image = gen_image(15, 1, 1000)
    image.save(path / f'{i}.png', 'PNG')
    _json = gen_json(index=i, name=f'{i} pic', description='Test NFT')

    with open(path / f'{i}.json', 'w', encoding='utf8') as file:
        json.dump(_json, file, indent=2, ensure_ascii=False)
