from copy import deepcopy

template = {
    'name': None,
    'symbol': 'PIXELART',
    'description': None,
    'seller_fee_basis_points': 5,
    'image': None,
    'external_url': None,
    'attributes': [
        {
            'trait_type': 'web',
            'value': 'yes'
        },
        {
            'trait_type': 'mobile',
            'value': 'yes'
        },
        {
            'trait_type': 'extension',
            'value': 'yes'
        }
    ],
    'collection': {
        'name': 'Pixel art collection',
        'family': 'pixelart'
    },
    'properties': {
        'files': [],  # will be filled
        'category': 'image',
        'creators': [
            {
                'address': '5gotnvW7pGeq7k4H52U9MzinUaMYsHTMEAiiu1sQd3AD',
                'share': 80
            },
            {
                'address': 'FZ9e7QZbNbXfR163NZidP14FakLpoAh4FzitXFh3U8uE',
                'share': 20
            }
        ]
    }
}


def gen_json(*args, index, name, description):
    res = deepcopy(template)

    filename = f'{index}.png'
    res['name'] = name
    res['description'] = description
    res['image'] = filename
    res['external_url'] = filename

    res['properties']['files'].append({
        'uri': filename,
        'type': 'image/png'
    })

    return res
