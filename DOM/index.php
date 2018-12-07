<!DOCTYPE html>

<html>

    <head>

        <meta charset="utf-8" />
        <title>DOM Atravessado</title>
        <link rel="stylesheet" type="text/css"/>
        
    </head>

        <body>

            <div id="animals" class="creature">Animals
                <div class ="creature">Mammals
                    <div class="creature">Dogs</div>
                    <div class="creature">Cats</div>
                    <div class="terrain">Forest</div>
                    <div class="terrain">Prairie</div>
                </div>
            

                <div class="creature">Reptiles
                    <div class="creature">Snake</div>
                    <div class="creature">Lizard</div>
                    <div class="terrain">Jungle</div>
                </div>
            </div>
            
            <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
            <script src="script.js"></script>
            
        </body>

</html>