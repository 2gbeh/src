#!/usr/bin/env python3
"""
Caesar Cipher Cryptography API

Author: Northwind AI <northwindai.org>
Date: 2026-06-26
"""

from fastapi import FastAPI
from pydantic import BaseModel

SHIFT = 42
ASCII = {
    32: ' ', 33: '!', 34: '"', 35: '#', 36: '$', 37: '%', 38: '&', 39: "'", 40: '(', 41: ')', 42: '*', 43: '+',
    44: ',', 45: '-', 46: '.', 47: '/', 48: '0', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7',
    56: '8', 57: '9', 58: ':', 59: ';', 60: '<', 61: '=', 62: '>', 63: '?', 64: '@', 65: 'A', 66: 'B', 67: 'C',
    68: 'D', 69: 'E', 70: 'F', 71: 'G', 72: 'H', 73: 'I', 74: 'J', 75: 'K', 76: 'L', 77: 'M', 78: 'N', 79: 'O',
    80: 'P', 81: 'Q', 82: 'R', 83: 'S', 84: 'T', 85: 'U', 86: 'V', 87: 'W', 88: 'X', 89: 'Y', 90: 'Z', 91: '[',
    92: '\\', 93: ']', 94: '^', 95: '_', 96: '`', 97: 'a', 98: 'b', 99: 'c', 100: 'd', 101: 'e', 102: 'f', 103: 'g',
    104: 'h', 105: 'i', 106: 'j', 107: 'k', 108: 'l', 109: 'm', 110: 'n', 111: 'o', 112: 'p', 113: 'q', 114: 'r',
    115: 's', 116: 't', 117: 'u', 118: 'v', 119: 'w', 120: 'x', 121: 'y', 122: 'z', 123: '{', 124: '|', 125: '}', 126: '~'
}

class RequestDto(BaseModel):
    message: str
    shift: int = SHIFT

def caesar_cipher(payload:RequestDto, decrypt: bool = False) -> str:
    shift = -payload.shift if decrypt else payload.shift
    result = ""

    for character in payload.message:
        if ord(character) in ASCII: # 32 <= ord(character) <= 126
            mock_index = ord(character) - 32 + shift  # 32–126 >> 0–94
            real_index = (mock_index % 95) + 32
            result += chr(real_index)

    return result

app = FastAPI()

@app.post("/api/encrypt")
def encrypt(body: RequestDto):
    # Ex. body.message = "The quick brown fox jumps over the lazy dog"
    data = caesar_cipher(body)
    return { "data": data }

@app.post("/api/decrypt")
def decrypt(body: RequestDto):
    # Ex. body.message = "~30J<@4.6J-=:B9J1:CJ5@8;>J:A0=J?30J7,EDJ/:2"
    data = caesar_cipher(body, decrypt=True)
    return { "data": data}



