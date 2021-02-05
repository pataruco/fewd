# FEWD

## Homeworks

Each homework has a main folder with the following structure

```text
homework-name
|
|- readme.md
|- starter-code
    |-index.html
    |-styles
    |-scripts
    |-readme.md
|- solution-code
    |-index.html
    |-styles
    |-scripts
    |-readme.md
starter-code.zip
solution-code.zip
```

The idea behind it, is to have in the same repo a reference for the homework with a link to download a zip

## Development

Once you finished creating/amending a homework

- Delete the zip file for the solution/starter code

```sh
rm name-of-homework-solution-code.zip
```

- Compress and create a new one 🗜

```sh
zip -r name-of-homework-solution-code.zip <folder-name>
```
