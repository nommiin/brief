# brief
A generic code scanner and tokenizer

# Usage
- Use `Scanner` to scan lines of code into a flat list of tokens
- Use `Processor.get` to nest tokens and apply other modifiers

# Example
*test.cpp*
```cpp
#include <string>

void test(std::string awoo) {
    int a = 32;
    if (a == 32) {
        /*
            this is a multi-line comment
        */
        a_function(a->member, 0xFF, 0b0000_1000, "Hello World!");
    }
}

// hello!
for(char i = 0; i < 32; i++) {
    templated_function<float>(i, "hello");
}
```

*tokens.json*
```json
[
    {
        "Type": "PreprocessorDirective",
        "Literal": "#include",
        "Index": 0,
        "Column": 0,
        "Line": 1
    },
    {
        "Type": "LessThan",
        "Literal": "<",
        "Index": 9,
        "Column": 9,
        "Line": 1
    },
    {
        "Type": "Identifier",
        "Literal": "string",
        "Index": 10,
        "Column": 10,
        "Line": 1
    },
    {
        "Type": "GreaterThan",
        "Literal": ">",
        "Index": 16,
        "Column": 16,
        "Line": 1
    },
    {
        "Type": "Keyword",
        "Literal": "void",
        "Index": 21,
        "Column": 0,
        "Line": 3
    },
    {
        "Type": "FunctionDef",
        "Literal": "test",
        "Index": 26,
        "Column": 5,
        "Line": 3,
        "Children": [
            {
                "Type": "Identifier",
                "Literal": "std",
                "Index": 31,
                "Column": 10,
                "Line": 3
            },
            {
                "Type": "ScopeResolver",
                "Literal": "::",
                "Index": 34,
                "Column": 13,
                "Line": 3
            },
            {
                "Type": "Identifier",
                "Literal": "string",
                "Index": 36,
                "Column": 15,
                "Line": 3
            },
            {
                "Type": "Identifier",
                "Literal": "awoo",
                "Index": 43,
                "Column": 22,
                "Line": 3
            }
        ]
    },
    {
        "Type": "ParenthesesPair",
        "Literal": "(",
        "Index": 30,
        "Column": 9,
        "Line": 3,
        "Children": [
            {
                "Type": "Identifier",
                "Literal": "std",
                "Index": 31,
                "Column": 10,
                "Line": 3
            },
            {
                "Type": "ScopeResolver",
                "Literal": "::",
                "Index": 34,
                "Column": 13,
                "Line": 3
            },
            {
                "Type": "Identifier",
                "Literal": "string",
                "Index": 36,
                "Column": 15,
                "Line": 3
            },
            {
                "Type": "Identifier",
                "Literal": "awoo",
                "Index": 43,
                "Column": 22,
                "Line": 3
            }
        ]
    },
    {
        "Type": "Identifier",
        "Literal": "std",
        "Index": 31,
        "Column": 10,
        "Line": 3
    },
    {
        "Type": "ScopeResolver",
        "Literal": "::",
        "Index": 34,
        "Column": 13,
        "Line": 3
    },
    {
        "Type": "Identifier",
        "Literal": "string",
        "Index": 36,
        "Column": 15,
        "Line": 3
    },
    {
        "Type": "Identifier",
        "Literal": "awoo",
        "Index": 43,
        "Column": 22,
        "Line": 3
    },
    {
        "Type": "RightParentheses",
        "Literal": ")",
        "Index": 47,
        "Column": 26,
        "Line": 3
    },
    {
        "Type": "BracePair",
        "Literal": "{",
        "Index": 49,
        "Column": 28,
        "Line": 3,
        "Children": [
            {
                "Type": "Keyword",
                "Literal": "int",
                "Index": 56,
                "Column": 4,
                "Line": 4
            },
            {
                "Type": "Identifier",
                "Literal": "a",
                "Index": 60,
                "Column": 8,
                "Line": 4
            },
            {
                "Type": "Assign",
                "Literal": "=",
                "Index": 62,
                "Column": 10,
                "Line": 4
            },
            {
                "Type": "Number",
                "Literal": 32,
                "Index": 64,
                "Column": 12,
                "Line": 4
            },
            {
                "Type": "Semicolon",
                "Literal": ";",
                "Index": 66,
                "Column": 14,
                "Line": 4
            },
            {
                "Type": "Keyword",
                "Literal": "if",
                "Index": 73,
                "Column": 4,
                "Line": 5
            },
            {
                "Type": "ParenthesesPair",
                "Literal": "(",
                "Index": 76,
                "Column": 7,
                "Line": 5,
                "Children": [
                    {
                        "Type": "Identifier",
                        "Literal": "a",
                        "Index": 77,
                        "Column": 8,
                        "Line": 5
                    },
                    {
                        "Type": "CompareEqual",
                        "Literal": "==",
                        "Index": 79,
                        "Column": 10,
                        "Line": 5
                    },
                    {
                        "Type": "Number",
                        "Literal": 32,
                        "Index": 82,
                        "Column": 13,
                        "Line": 5
                    }
                ]
            },
            {
                "Type": "BracePair",
                "Literal": "{",
                "Index": 86,
                "Column": 17,
                "Line": 5,
                "Children": [
                    {
                        "Type": "CommentMultiline",
                        "Literal": "/*\r\n            this is a multi-line comment\r\n        */",
                        "Index": 97,
                        "Column": 8,
                        "Line": 8
                    },
                    {
                        "Type": "FunctionCall",
                        "Literal": "a_function",
                        "Index": 163,
                        "Column": 8,
                        "Line": 9,
                        "Children": [
                            {
                                "Type": "Identifier",
                                "Literal": "a",
                                "Index": 174,
                                "Column": 19,
                                "Line": 9
                            },
                            {
                                "Type": "PointerAccess",
                                "Literal": "->",
                                "Index": 175,
                                "Column": 20,
                                "Line": 9
                            },
                            {
                                "Type": "Identifier",
                                "Literal": "member",
                                "Index": 177,
                                "Column": 22,
                                "Line": 9
                            },
                            {
                                "Type": "Comma",
                                "Literal": ",",
                                "Index": 183,
                                "Column": 28,
                                "Line": 9
                            },
                            {
                                "Type": "NumberHex",
                                "Literal": "0xFF",
                                "Index": 185,
                                "Column": 30,
                                "Line": 9
                            },
                            {
                                "Type": "Comma",
                                "Literal": ",",
                                "Index": 189,
                                "Column": 34,
                                "Line": 9
                            },
                            {
                                "Type": "NumberBinary",
                                "Literal": "0b0000_1000",
                                "Index": 191,
                                "Column": 36,
                                "Line": 9
                            },
                            {
                                "Type": "Comma",
                                "Literal": ",",
                                "Index": 202,
                                "Column": 47,
                                "Line": 9
                            },
                            {
                                "Type": "String",
                                "Literal": "Hello World!",
                                "Index": 204,
                                "Column": 49,
                                "Line": 9
                            }
                        ]
                    },
                    {
                        "Type": "Semicolon",
                        "Literal": ";",
                        "Index": 219,
                        "Column": 1,
                        "Line": 9
                    }
                ]
            }
        ]
    },
    {
        "Type": "Keyword",
        "Literal": "int",
        "Index": 56,
        "Column": 4,
        "Line": 4
    },
    {
        "Type": "Identifier",
        "Literal": "a",
        "Index": 60,
        "Column": 8,
        "Line": 4
    },
    {
        "Type": "Assign",
        "Literal": "=",
        "Index": 62,
        "Column": 10,
        "Line": 4
    },
    {
        "Type": "Number",
        "Literal": 32,
        "Index": 64,
        "Column": 12,
        "Line": 4
    },
    {
        "Type": "Semicolon",
        "Literal": ";",
        "Index": 66,
        "Column": 14,
        "Line": 4
    },
    {
        "Type": "Keyword",
        "Literal": "if",
        "Index": 73,
        "Column": 4,
        "Line": 5
    },
    {
        "Type": "ParenthesesPair",
        "Literal": "(",
        "Index": 76,
        "Column": 7,
        "Line": 5,
        "Children": [
            {
                "Type": "Identifier",
                "Literal": "a",
                "Index": 77,
                "Column": 8,
                "Line": 5
            },
            {
                "Type": "CompareEqual",
                "Literal": "==",
                "Index": 79,
                "Column": 10,
                "Line": 5
            },
            {
                "Type": "Number",
                "Literal": 32,
                "Index": 82,
                "Column": 13,
                "Line": 5
            }
        ]
    },
    {
        "Type": "Identifier",
        "Literal": "a",
        "Index": 77,
        "Column": 8,
        "Line": 5
    },
    {
        "Type": "CompareEqual",
        "Literal": "==",
        "Index": 79,
        "Column": 10,
        "Line": 5
    },
    {
        "Type": "Number",
        "Literal": 32,
        "Index": 82,
        "Column": 13,
        "Line": 5
    },
    {
        "Type": "RightParentheses",
        "Literal": ")",
        "Index": 84,
        "Column": 15,
        "Line": 5
    },
    {
        "Type": "BracePair",
        "Literal": "{",
        "Index": 86,
        "Column": 17,
        "Line": 5,
        "Children": [
            {
                "Type": "CommentMultiline",
                "Literal": "/*\r\n            this is a multi-line comment\r\n        */",
                "Index": 97,
                "Column": 8,
                "Line": 8
            },
            {
                "Type": "FunctionCall",
                "Literal": "a_function",
                "Index": 163,
                "Column": 8,
                "Line": 9,
                "Children": [
                    {
                        "Type": "Identifier",
                        "Literal": "a",
                        "Index": 174,
                        "Column": 19,
                        "Line": 9
                    },
                    {
                        "Type": "PointerAccess",
                        "Literal": "->",
                        "Index": 175,
                        "Column": 20,
                        "Line": 9
                    },
                    {
                        "Type": "Identifier",
                        "Literal": "member",
                        "Index": 177,
                        "Column": 22,
                        "Line": 9
                    },
                    {
                        "Type": "Comma",
                        "Literal": ",",
                        "Index": 183,
                        "Column": 28,
                        "Line": 9
                    },
                    {
                        "Type": "NumberHex",
                        "Literal": "0xFF",
                        "Index": 185,
                        "Column": 30,
                        "Line": 9
                    },
                    {
                        "Type": "Comma",
                        "Literal": ",",
                        "Index": 189,
                        "Column": 34,
                        "Line": 9
                    },
                    {
                        "Type": "NumberBinary",
                        "Literal": "0b0000_1000",
                        "Index": 191,
                        "Column": 36,
                        "Line": 9
                    },
                    {
                        "Type": "Comma",
                        "Literal": ",",
                        "Index": 202,
                        "Column": 47,
                        "Line": 9
                    },
                    {
                        "Type": "String",
                        "Literal": "Hello World!",
                        "Index": 204,
                        "Column": 49,
                        "Line": 9
                    }
                ]
            },
            {
                "Type": "Semicolon",
                "Literal": ";",
                "Index": 219,
                "Column": 1,
                "Line": 9
            }
        ]
    },
    {
        "Type": "CommentMultiline",
        "Literal": "/*\r\n            this is a multi-line comment\r\n        */",
        "Index": 97,
        "Column": 8,
        "Line": 8
    },
    {
        "Type": "FunctionCall",
        "Literal": "a_function",
        "Index": 163,
        "Column": 8,
        "Line": 9,
        "Children": [
            {
                "Type": "Identifier",
                "Literal": "a",
                "Index": 174,
                "Column": 19,
                "Line": 9
            },
            {
                "Type": "PointerAccess",
                "Literal": "->",
                "Index": 175,
                "Column": 20,
                "Line": 9
            },
            {
                "Type": "Identifier",
                "Literal": "member",
                "Index": 177,
                "Column": 22,
                "Line": 9
            },
            {
                "Type": "Comma",
                "Literal": ",",
                "Index": 183,
                "Column": 28,
                "Line": 9
            },
            {
                "Type": "NumberHex",
                "Literal": "0xFF",
                "Index": 185,
                "Column": 30,
                "Line": 9
            },
            {
                "Type": "Comma",
                "Literal": ",",
                "Index": 189,
                "Column": 34,
                "Line": 9
            },
            {
                "Type": "NumberBinary",
                "Literal": "0b0000_1000",
                "Index": 191,
                "Column": 36,
                "Line": 9
            },
            {
                "Type": "Comma",
                "Literal": ",",
                "Index": 202,
                "Column": 47,
                "Line": 9
            },
            {
                "Type": "String",
                "Literal": "Hello World!",
                "Index": 204,
                "Column": 49,
                "Line": 9
            }
        ]
    },
    {
        "Type": "ParenthesesPair",
        "Literal": "(",
        "Index": 173,
        "Column": 18,
        "Line": 9,
        "Children": [
            {
                "Type": "Identifier",
                "Literal": "a",
                "Index": 174,
                "Column": 19,
                "Line": 9
            },
            {
                "Type": "PointerAccess",
                "Literal": "->",
                "Index": 175,
                "Column": 20,
                "Line": 9
            },
            {
                "Type": "Identifier",
                "Literal": "member",
                "Index": 177,
                "Column": 22,
                "Line": 9
            },
            {
                "Type": "Comma",
                "Literal": ",",
                "Index": 183,
                "Column": 28,
                "Line": 9
            },
            {
                "Type": "NumberHex",
                "Literal": "0xFF",
                "Index": 185,
                "Column": 30,
                "Line": 9
            },
            {
                "Type": "Comma",
                "Literal": ",",
                "Index": 189,
                "Column": 34,
                "Line": 9
            },
            {
                "Type": "NumberBinary",
                "Literal": "0b0000_1000",
                "Index": 191,
                "Column": 36,
                "Line": 9
            },
            {
                "Type": "Comma",
                "Literal": ",",
                "Index": 202,
                "Column": 47,
                "Line": 9
            },
            {
                "Type": "String",
                "Literal": "Hello World!",
                "Index": 204,
                "Column": 49,
                "Line": 9
            }
        ]
    },
    {
        "Type": "Identifier",
        "Literal": "a",
        "Index": 174,
        "Column": 19,
        "Line": 9
    },
    {
        "Type": "PointerAccess",
        "Literal": "->",
        "Index": 175,
        "Column": 20,
        "Line": 9
    },
    {
        "Type": "Identifier",
        "Literal": "member",
        "Index": 177,
        "Column": 22,
        "Line": 9
    },
    {
        "Type": "Comma",
        "Literal": ",",
        "Index": 183,
        "Column": 28,
        "Line": 9
    },
    {
        "Type": "NumberHex",
        "Literal": "0xFF",
        "Index": 185,
        "Column": 30,
        "Line": 9
    },
    {
        "Type": "Comma",
        "Literal": ",",
        "Index": 189,
        "Column": 34,
        "Line": 9
    },
    {
        "Type": "NumberBinary",
        "Literal": "0b0000_1000",
        "Index": 191,
        "Column": 36,
        "Line": 9
    },
    {
        "Type": "Comma",
        "Literal": ",",
        "Index": 202,
        "Column": 47,
        "Line": 9
    },
    {
        "Type": "String",
        "Literal": "Hello World!",
        "Index": 204,
        "Column": 49,
        "Line": 9
    },
    {
        "Type": "RightParentheses",
        "Literal": ")",
        "Index": 218,
        "Column": 0,
        "Line": 9
    },
    {
        "Type": "Semicolon",
        "Literal": ";",
        "Index": 219,
        "Column": 1,
        "Line": 9
    },
    {
        "Type": "RightBrace",
        "Literal": "}",
        "Index": 226,
        "Column": 4,
        "Line": 10
    },
    {
        "Type": "RightBrace",
        "Literal": "}",
        "Index": 229,
        "Column": 0,
        "Line": 11
    },
    {
        "Type": "Comment",
        "Literal": "// hello!\r\n",
        "Index": 234,
        "Column": 0,
        "Line": 14
    },
    {
        "Type": "Keyword",
        "Literal": "for",
        "Index": 245,
        "Column": 0,
        "Line": 14
    },
    {
        "Type": "ParenthesesPair",
        "Literal": "(",
        "Index": 248,
        "Column": 3,
        "Line": 14,
        "Children": [
            {
                "Type": "Keyword",
                "Literal": "char",
                "Index": 249,
                "Column": 4,
                "Line": 14
            },
            {
                "Type": "Identifier",
                "Literal": "i",
                "Index": 254,
                "Column": 9,
                "Line": 14
            },
            {
                "Type": "Assign",
                "Literal": "=",
                "Index": 256,
                "Column": 11,
                "Line": 14
            },
            {
                "Type": "Number",
                "Literal": "0",
                "Index": 258,
                "Column": 13,
                "Line": 14
            },
            {
                "Type": "Semicolon",
                "Literal": ";",
                "Index": 259,
                "Column": 14,
                "Line": 14
            },
            {
                "Type": "Identifier",
                "Literal": "i",
                "Index": 261,
                "Column": 16,
                "Line": 14
            },
            {
                "Type": "LessThan",
                "Literal": "<",
                "Index": 263,
                "Column": 18,
                "Line": 14
            },
            {
                "Type": "Number",
                "Literal": 32,
                "Index": 265,
                "Column": 20,
                "Line": 14
            },
            {
                "Type": "Semicolon",
                "Literal": ";",
                "Index": 267,
                "Column": 22,
                "Line": 14
            },
            {
                "Type": "Identifier",
                "Literal": "i",
                "Index": 269,
                "Column": 24,
                "Line": 14
            },
            {
                "Type": "Increment",
                "Literal": "++",
                "Index": 270,
                "Column": 25,
                "Line": 14
            }
        ]
    },
    {
        "Type": "Keyword",
        "Literal": "char",
        "Index": 249,
        "Column": 4,
        "Line": 14
    },
    {
        "Type": "Identifier",
        "Literal": "i",
        "Index": 254,
        "Column": 9,
        "Line": 14
    },
    {
        "Type": "Assign",
        "Literal": "=",
        "Index": 256,
        "Column": 11,
        "Line": 14
    },
    {
        "Type": "Number",
        "Literal": "0",
        "Index": 258,
        "Column": 13,
        "Line": 14
    },
    {
        "Type": "Semicolon",
        "Literal": ";",
        "Index": 259,
        "Column": 14,
        "Line": 14
    },
    {
        "Type": "Identifier",
        "Literal": "i",
        "Index": 261,
        "Column": 16,
        "Line": 14
    },
    {
        "Type": "LessThan",
        "Literal": "<",
        "Index": 263,
        "Column": 18,
        "Line": 14
    },
    {
        "Type": "Number",
        "Literal": 32,
        "Index": 265,
        "Column": 20,
        "Line": 14
    },
    {
        "Type": "Semicolon",
        "Literal": ";",
        "Index": 267,
        "Column": 22,
        "Line": 14
    },
    {
        "Type": "Identifier",
        "Literal": "i",
        "Index": 269,
        "Column": 24,
        "Line": 14
    },
    {
        "Type": "Increment",
        "Literal": "++",
        "Index": 270,
        "Column": 25,
        "Line": 14
    },
    {
        "Type": "RightParentheses",
        "Literal": ")",
        "Index": 272,
        "Column": 27,
        "Line": 14
    },
    {
        "Type": "BracePair",
        "Literal": "{",
        "Index": 274,
        "Column": 29,
        "Line": 14,
        "Children": [
            {
                "Type": "Identifier",
                "Literal": "templated_function",
                "Index": 281,
                "Column": 4,
                "Line": 15
            },
            {
                "Type": "LessThan",
                "Literal": "<",
                "Index": 299,
                "Column": 22,
                "Line": 15
            },
            {
                "Type": "Keyword",
                "Literal": "float",
                "Index": 300,
                "Column": 23,
                "Line": 15
            },
            {
                "Type": "GreaterThan",
                "Literal": ">",
                "Index": 305,
                "Column": 28,
                "Line": 15
            },
            {
                "Type": "ParenthesesPair",
                "Literal": "(",
                "Index": 306,
                "Column": 29,
                "Line": 15,
                "Children": [
                    {
                        "Type": "Identifier",
                        "Literal": "i",
                        "Index": 307,
                        "Column": 30,
                        "Line": 15
                    },
                    {
                        "Type": "Comma",
                        "Literal": ",",
                        "Index": 308,
                        "Column": 31,
                        "Line": 15
                    },
                    {
                        "Type": "String",
                        "Literal": "hello",
                        "Index": 310,
                        "Column": 33,
                        "Line": 15
                    }
                ]
            },
            {
                "Type": "Semicolon",
                "Literal": ";",
                "Index": 318,
                "Column": 1,
                "Line": 15
            }
        ]
    },
    {
        "Type": "Identifier",
        "Literal": "templated_function",
        "Index": 281,
        "Column": 4,
        "Line": 15
    },
    {
        "Type": "LessThan",
        "Literal": "<",
        "Index": 299,
        "Column": 22,
        "Line": 15
    },
    {
        "Type": "Keyword",
        "Literal": "float",
        "Index": 300,
        "Column": 23,
        "Line": 15
    },
    {
        "Type": "GreaterThan",
        "Literal": ">",
        "Index": 305,
        "Column": 28,
        "Line": 15
    },
    {
        "Type": "ParenthesesPair",
        "Literal": "(",
        "Index": 306,
        "Column": 29,
        "Line": 15,
        "Children": [
            {
                "Type": "Identifier",
                "Literal": "i",
                "Index": 307,
                "Column": 30,
                "Line": 15
            },
            {
                "Type": "Comma",
                "Literal": ",",
                "Index": 308,
                "Column": 31,
                "Line": 15
            },
            {
                "Type": "String",
                "Literal": "hello",
                "Index": 310,
                "Column": 33,
                "Line": 15
            }
        ]
    },
    {
        "Type": "Identifier",
        "Literal": "i",
        "Index": 307,
        "Column": 30,
        "Line": 15
    },
    {
        "Type": "Comma",
        "Literal": ",",
        "Index": 308,
        "Column": 31,
        "Line": 15
    },
    {
        "Type": "String",
        "Literal": "hello",
        "Index": 310,
        "Column": 33,
        "Line": 15
    },
    {
        "Type": "RightParentheses",
        "Literal": ")",
        "Index": 317,
        "Column": 0,
        "Line": 15
    },
    {
        "Type": "Semicolon",
        "Literal": ";",
        "Index": 318,
        "Column": 1,
        "Line": 15
    },
    {
        "Type": "RightBrace",
        "Literal": "}",
        "Index": 321,
        "Column": 0,
        "Line": 16
    },
    {
        "Type": "EndFile",
        "Literal": "}",
        "Index": 321,
        "Column": 0,
        "Line": 16
    }
]```