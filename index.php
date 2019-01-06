<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <!--if lt IE 9script(src='https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js')
    -->
      <title>Bookreader</title>
    <link rel="stylesheet" href="public/css/main.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" defer></script>
    <script src="public/js/functions.js" defer></script>
  </head>
  <body>


    <main class="wrapper">
      <div class="part-background"></div>
      <div class="filter-options">
        <div id="book-menu" class="filter book-menu">
          <h2>Choisir le livre</h2>
          <hr />
            <div class="filter-content">
              <input type="radio" id="book_a" value="book_a" name="book" checked>
              <label for="book_a">Livre A</label><br />
              <input type="radio" id="book_b" value="book_b" name="book">
              <label for="book_b">Livre B</label><br />
            </div>
        </div>

        <div class="filter menu surate-menu">
          <h2>Choisir la sourate</h2>
          <hr />
          <div class="filter-content">
            <select size="11">
              <option value="1">Titre 1</option>
              <option value="2">Titre 2</option>
            </select>
          </div>
        </div>

        <div class="filter menu chapter-menu current">
          <h2>Choisir le chapitre</h2>
          <hr />
          <div class="filter-content">
            <select size="11">
              <option value="1">Chapitre 1</option>
              <option value="2">Chapitre 2</option>
            </select>
          </div>
        </div>

        <div id="language-menu" class="filter language-menu">
          <h2>Langages</h2>
          <hr />
          <div class="filter-content">
          </div>
        </div>

        <div id="language-title-menu" class="filter language-title-menu">
          <h2>Langue du titre par défaut</h2>
          <hr />
          <div class="filter-content">

          </div>
        </div>
      </div>

      <div id="all" class="all">
        <span class='font-size-change'>Changer la taille de la police: <span id='larger' class='option'>(+)</span> / <span id='smaller' class='option'>(-)</span></span>
        <h2 id="name"></h2>
        <hr />
      </div>


    </main>
    <footer>
      <p>
        Bookreader - 2016<br />
        Contacter le développeur: agiz@live.fr
      </p>
    </footer>


  </body>
</html>
