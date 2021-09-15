# Original: https://www.freecodecamp.org/news/how-to-create-generative-art-in-less-than-100-lines-of-code-d37f379859f/
import random
from PIL import Image, ImageDraw

origDimension = 1500
r = lambda: random.randint(50, 215)
rc = lambda: (r(), r(), r())
listSym = []


def create_square(border, draw, randColor, element, size):
    if (element == int(size / 2)):
        draw.rectangle(border, randColor)
    elif (len(listSym) == element + 1):
        draw.rectangle(border, listSym.pop())
    else:
        listSym.append(randColor)
        draw.rectangle(border, randColor)


def create_invader(border, draw, size):
    x0, y0, x1, y1 = border
    squareSize = (x1 - x0) / size
    randColors = [rc(), rc(), rc(), (0, 0, 0), (0, 0, 0), (0, 0, 0)]
    I = 1
    for y in range(0, size):
        I *= -1
        element = 0
        for x in range(0, size):
            topLeftX = x * squareSize + x0
            topLeftY = y * squareSize + y0
            botRightX = topLeftX + squareSize
            botRightY = topLeftY + squareSize
            create_square((topLeftX, topLeftY, botRightX, botRightY), draw, random.choice(randColors), element, size)
            if (element == int(size / 2) or element == 0):
                I *= -1;
            element += I


def gen_image(size: int, invaders: int, imgSize: int):
    origDimension = imgSize
    origImage = Image.new('RGB', (origDimension, origDimension))
    draw = ImageDraw.Draw(origImage)
    invaderSize = origDimension / invaders
    padding = invaderSize / size
    for x in range(0, invaders):
        for y in range(0, invaders):
            topLeftX = x * invaderSize + padding / 2
            topLeftY = y * invaderSize + padding / 2
            botRightX = topLeftX + invaderSize - padding
            botRightY = topLeftY + invaderSize - padding
            create_invader((topLeftX, topLeftY, botRightX, botRightY), draw, size)
    return origImage
