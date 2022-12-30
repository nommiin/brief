# brief
A generic code scanner and tokenizer

# Updates
Any improvements or changes trickle down from [ImGui_GM](https://github.com/nommiin/ImGui_GM), check that repo if there is a newer version of brief

# Usage
- Use `Scanner` to scan lines of code into a flat list of tokens
- Use `Processor.get` to nest tokens and apply other modifiers

# Example
*test.cpp*
```cpp
#include <string>

// hello!
void test(std::string awoo) {
    int a = 32;
    if (a == 32) {
        /*
            this is a multi-line comment
        */
        a_function<float>(a->member, 0xFF, 0b0000_1000, "Hello World!");
    }
}
```

*tokens.json*
```json
[
    {
        "Type": "PreprocessorDirective",
        "Literal": "#define",
        "Line": 1
    },
    {
        "Type": "Identifier",
        "Literal": "HEWWO",
        "Line": 1
    },
    {
        "Type": "Comment",
        "Literal": "// hello!\r\n",
        "Line": 4
    },
    {
        "Type": "Keyword",
        "Literal": "void",
        "Line": 4
    },
    {
        "Type": "FunctionDef",
        "Literal": "test",
        "Line": 4,
        "Children": [
            {
                "Type": "Identifier",
                "Literal": "std",
                "Line": 4
            },
            {
                "Type": "ScopeResolver",
                "Literal": "::",
                "Line": 4
            },
            {
                "Type": "Identifier",
                "Literal": "string",
                "Line": 4
            },
            {
                "Type": "Identifier",
                "Literal": "awoo",
                "Line": 4
            }
        ]
    },
    {
        "Type": "BracePair",
        "Literal": "{",
        "Line": 4,
        "Children": [
            {
                "Type": "Keyword",
                "Literal": "int",
                "Line": 5
            },
            {
                "Type": "Identifier",
                "Literal": "a",
                "Line": 5
            },
            {
                "Type": "Assign",
                "Literal": "=",
                "Line": 5
            },
            {
                "Type": "Number",
                "Literal": 32,
                "Line": 5
            },
            {
                "Type": "Semicolon",
                "Literal": ";",
                "Line": 5
            },
            {
                "Type": "Keyword",
                "Literal": "if",
                "Line": 6
            },
            {
                "Type": "ParenthesesPair",
                "Literal": "(",
                "Line": 6,
                "Children": [
                    {
                        "Type": "Identifier",
                        "Literal": "a",
                        "Line": 6
                    },
                    {
                        "Type": "CompareEqual",
                        "Literal": "==",
                        "Line": 6
                    },
                    {
                        "Type": "Number",
                        "Literal": 32,
                        "Line": 6
                    }
                ]
            },
            {
                "Type": "BracePair",
                "Literal": "{",
                "Line": 6,
                "Children": [
                    {
                        "Type": "CommentMultiline",
                        "Literal": "/*\r\n            this is a multi-line comment\r\n        */",
                        "Line": 9
                    },
                    {
                        "Type": "Identifier",
                        "Literal": "a_function",
                        "Line": 10
                    },
                    {
                        "Type": "LessThan",
                        "Literal": "<",
                        "Line": 10
                    },
                    {
                        "Type": "Keyword",
                        "Literal": "float",
                        "Line": 10
                    },
                    {
                        "Type": "GreaterThan",
                        "Literal": ">",
                        "Line": 10
                    },
                    {
                        "Type": "ParenthesesPair",
                        "Literal": "(",
                        "Line": 10,
                        "Children": [
                            {
                                "Type": "Identifier",
                                "Literal": "a",
                                "Line": 10
                            },
                            {
                                "Type": "PointerAccess",
                                "Literal": "->",
                                "Line": 10
                            },
                            {
                                "Type": "Identifier",
                                "Literal": "member",
                                "Line": 10
                            },
                            {
                                "Type": "Comma",
                                "Literal": ",",
                                "Line": 10
                            },
                            {
                                "Type": "NumberHex",
                                "Literal": "0xFF",
                                "Line": 10
                            },
                            {
                                "Type": "Comma",
                                "Literal": ",",
                                "Line": 10
                            },
                            {
                                "Type": "NumberBinary",
                                "Literal": "0b0000_1000",
                                "Line": 10
                            },
                            {
                                "Type": "Comma",
                                "Literal": ",",
                                "Line": 10
                            },
                            {
                                "Type": "String",
                                "Literal": "Hello World!",
                                "Line": 10
                            }
                        ]
                    },
                    {
                        "Type": "Semicolon",
                        "Literal": ";",
                        "Line": 10
                    }
                ]
            }
        ]
    },
    {
        "Type": "EndFile",
        "Literal": "}",
        "Line": 12
    }
]
```
