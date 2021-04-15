<?php header ("Access-Control-Allow-Origin: *"); ?>
<?php 
include("../api.php");

if (!isset($_GET['do'])){
    echo "No action requested";
    die();
}

switch($_GET['do']){
    case "add_commentary": 
        echo(add_commentary($_GET));
        break;
    case "get_fake_data": 
        echo(json_encode(get_fake_data()));
        break;
    case "get_commentaries": 
        echo(json_encode(get_commentaries($_GET)));
        break;
    case "delete_commentaries": 
        echo(delete_commentaries($_GET));
        break;
    case "edit_commentaries": 
        echo(edit_commentaries($_GET));
        break;
    case "get_client_by_idproduct": 
        echo(json_encode(get_client_by_idproduct($_GET)));
        break;
    case "get_product_sales": 
        echo(json_encode(get_product_sales()));
        break;
        
    default:
        echo "Aucune API";
}

?>