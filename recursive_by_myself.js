const dossierPrincipal = {
    nom: 'Ada',
    contenu: [{
        nom: 'Projets collectifs Ada',
        contenu: [{
            nom: 'Pico8',
            contenu: [{
              nom: 'mariokart.p8'
            }]
          },
          {
            nom: 'Dataviz',
            contenu: [{
                nom: 'index.html'
              },
              {
                nom: 'script.js'
              }
            ]
          }
        ]
      },
      {nom: 'CV.pdf'},
      {
        nom: 'Projets persos',
        contenu: [{
          nom: 'Portfolio',
          contenu: [{
              nom: 'index.html'
            },
            {
              nom: 'script.js'
            }
          ]
        }]
      },
    ],
  }

  function displayRecursive(computer_files){
    if ("contenu" in computer_files){
        console.log("🗂️", computer_files.nom)
            for (element of computer_files.contenu){
                displayRecursive(element)
            }
    }
    else {
        console.log("📑", computer_files.nom)
    }
  }

  displayRecursive(dossierPrincipal)

