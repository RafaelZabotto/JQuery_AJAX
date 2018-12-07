<!DOCTYPE html>

<html>

    <head>

        <meta charset="utf-8" />
        <title>Trabalhando com Eventos no dropdown</title>
        <link rel="stylesheet" href="style_change.css" type="text/css" />
           
    </head>

        <body>
                
            <div id="example" class="container">
                <select id="place">
                    <option value="">Selecione seu destino</option>
                    <option value="santiago" data-price="100">Santiago</option>
                    <option value="madrid" data-price="180">Madrid</option>
                    <option value="yakarta" data-price="300">Yakarta</option>
                    <option value="istambu" data-price="150">Istambul</option>
                    <option value="tokyo" data-price="200">Tokyo</option>
                </select>
            </div>

                <div id="result" class="container"></div>

                <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script> 
                <script src="script_change.js"></script>

        </body>

</html>