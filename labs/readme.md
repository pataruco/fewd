# FEWD

## Labs

Each labs has a main folder with the following structure

```text
lab-name
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

The idea behind it, is to have in the same repo a reference for the lab with a link to download a zip

## Development

Once you finished creating/amending a lab

- Delete the zip file for the solution/starter code

```sh
rm name-of-lab-solution-code.zip
```

- Compress and create a new one

```sh
zip -r name-of-lab-solution-code.zip <folder-name>
```
