# KinderKids
A few resources related to teaching


 ## Resources:
 
 * [**Slideshow:**](https://travisa9.github.io/KinderKids/ "The website") This is just to show the art my kids have done in class. 
 * [**Crazy Phrase Generator:**](https://travisa9.github.io/KinderKids/Crazy%20Art.html "WIP") This is a useful tool for teaching. It will generate unique, funny sentences and phrases to use for drawing ideas or other things.
 * [**Market Equilibrium Simulator:**](https://travisa9.github.io/KinderKids/MarketEqualibrium.html "Cool beans!") Simple simulation of ecconomic forces which lead to equilibrium. User can set variables such as number of agents (buyers, sellers), expectation, production cost and limit. Would be cool to flesh this out a bit more sometime.


 ## PDF Extractor:
 
  * [**PDF to images download hack:**](https://github.com/TravisA9/KinderKids/blob/main/docs/pdfHackMultiple.js "Paste to js Consol") This is a chunk of code you can use to download PDFs as high quality images from websites that use a popular system for displaying PDFs. 
  
 #### Instrucctions: 
 1. Go to site you wish to download PDF from and search for the specific PDF. Ex: [https://orientbook.net](https://orientbook.net/abc)
 2. Press `Ctrl+Shift + i` to open console and paste [the code](https://github.com/TravisA9/KinderKids/blob/main/docs/pdfHackMultiple.js "Paste to js Consol") into the js console.
 3. While the desired PDF is loading -and before it finishes loading- press `Enter` to execute the code. This will create the controls you need and establish a connection to the document generator.
 4. Choose the settings you want using the injected controls. For example, if you wat your documents to have a naming scheme like this: page_001.png , type in the word "page_" and ".png" . The numbers will automatically be inserted and incremented.
 5. Scroll through 10 or 20 pages of the document to ensure that those pages are generated* and click "Generate". This should save all of the existing pages at once into the directory of your choice.
 6. Repeat step #5 until you have the whole document.
 
 **Explanation:** The document portions are usually generated (or destryed) depending on scroll position to limit memory use. This means that you will have to save the document in a few chunks if there are many pages.
