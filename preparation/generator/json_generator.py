from copy import deepcopy

template = {
    'name': None,
    'symbol': '',
    'description': None,
    'seller_fee_basis_points': 5,
    'image': None,
    'external_url': 'https://solflare.com',
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
        'name': 'Mark collection',
        'family': 'Mark'
    },
    'properties': {
        'files': [],
        'category': 'image',
        'creators': [
            {
                'address': '5gotnvW7pGeq7k4H52U9MzinUaMYsHTMEAiiu1sQd3AD',
                'share': 100
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

    res['properties']['files'].append({
        'uri': filename,
        'type': 'image/png'
    })

    return res
