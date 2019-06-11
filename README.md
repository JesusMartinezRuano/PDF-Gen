# PDF-Gen
Web App based on React using pdfkit, generate barcodes, qr, inserting svg logos (No rasterized content).


## Why pdfkit

[Pdfkit](https://pdfkit.org/) is the only library which can insert svg files onto PDF files in a true vectorized way. Not using canvas or a raster method. The svg files must be very simple format (avoiding refs and other Adobe Illustrator bloats). Using pdfkit with React implies dealing with Webpack to avoid ugly fs errors. The pdfkit.js in root has been *browserified*.


## Fonts

You can embed ttf fonts, beware not to load much fonts or your bundle will get fat. Also pdfkit comes with elementary fonts such as:

 - Helvetica
 - Times
 - Courier

They are located at:

    node_modules/pdfkit/js/data

## Logos

I prefer svg´s, you can scale as you want without pixelation. Raster or canvas wont get this quality and oversizes resulting doc. 

## Barcodes and QR

All your files are listed in the file explorer. You can switch from one to another by clicking a file in the list. The choosen library was pure-svg-code, which generates  on-the-fly barcodes or qr from a given data.

## Report table

The table is very clear and simple as you can see [here](https://github.com/JesusMartinezRuano/PDF-Gen/blob/master/pdfkit-and-webpack%20-%202019-06-11T114436.183.pdf). Note: the github website doesn´t render online the svg well. **Download recommended**.
## Used libraries
This list isn´t a dependencies list, showed as illustrative purpouses.

 - React
 - PdfKit
 - Browserify
 - svg-to-pdfkit
 - pure-svg-code
 - webpack
 
## Steps

Clone this repo, then do:

    npm install

    npm start
This launches a fine-tuned version (via webpack and browserify) capable of access to browser file system without errors.
