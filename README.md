# simple-http-codes
Tired of having to look up the correct http response code? Well now you can easily find out the appropriate code without leaving your IDE 🥳.

No more returning 500🛑 for every error.

This package simply defines a namespace for HTTPCodes, grouping them in their category, and provides jsdocs with a short description and link for more information.
All information is based on the [RFC 9110 : HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110) 📖

- Clutter free :broom:
- 100% Developer Friendly :desktop_computer:

## Usage 🧰

Simply install the npm package, import the HTTPCodes object...and use it! It's that simple :)
### NPM Package
```npm
npm i simple-http-codes
```

![demo](/example.gif)

### JsDocs 📓
Each HTTP Code has a jsdoc with: 
  - a brief description of it's usage
  - a link providing detailed information
  - an optional "related" field for ambiguous status codes
    - i.e. Code 200 represents a successful response, but sometimes it's more appropriate to use 201 or 204

## Disclaimer ⚠️
This is currently a work in progress project, more codes will be added, and descriptions improved.

*Feel free to contribute!*

## Contributing 🧑‍🤝‍🧑
If you wish to contribute, fork the repo and add either more codes with the appropriate js docs, or improve the existing ones.
At the moment I'm just copying the first phrase from the [RFC 9110 : HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110) sub sections

- Remember that each code should contain a **description**, **link** and the **related codes** (if applicable).
- Use **PascalCase** for the enums, and **UPPER_SNAKE_CASE** for new codes.
