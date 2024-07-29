# Recusrive Folder Sorting

**Recusrive Folder Sorting** is a JavaScript application that recursively displays a hierarchical representation of a file directory structure. The program prints out folder and file names with different icons for easy identification.

## Features

- Recursively traverses a nested directory structure.
- Displays folders with a folder icon (`🗂️`).
- Displays files with a document icon (`📑`).

## Usage

1. The main directory structure is defined in the `dossierPrincipal` object.
2. The `displayRecursive` function is called to print the structure to the console.
3. Folder names are displayed with a folder icon, while file names are displayed with a document icon.

## Code Overview

- **Data Structure**: The `dossierPrincipal` object represents the main directory containing folders and files.
- **Recursive Function**: The `displayRecursive` function takes a directory object as an argument and prints its contents:
  - If the object contains a `contenu` property (indicating it’s a folder), it prints the folder name and recursively processes its contents.
  - If it’s a file (no `contenu` property), it prints the file name.


## Contact

For questions or feedback, please reach out to solena_ananda@hotmail.com
