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

Once you finished creating/amending a homework run the following to delete the zip file for the solution/starter code, compress and create a new ones

- Delete the zip file for the solution/starter code

```sh
yarn workspace homeworks build
```

## Index

- [Relaxr 1](./relaxr-1)
