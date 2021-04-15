<?php header ("Access-Control-Allow-Origin: *"); ?>
<?php

function connect_to_db(){
    $servername = "localhost";
    $username = "root";
    $password = "";

    try{
        $conn = new PDO("mysql:host=$servername;dbname=blissim", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
      }
      return $conn;
 }

function get_fake_data(){
    $json = file_get_contents("https://fakestoreapi.com/products");
    return $json;
}

function add_commentary($commentary) {
    try{
        $db = connect_to_db();
        $stmt = $db -> prepare("INSERT INTO `commentary`(`productID`, `comment`, `date`) 
        VALUES (:prodID, :commentary, '".date("Y-m-d H:i:s")."')");
        
        $stmt->bindParam(':prodID', $commentary["prodID"]);
        $stmt->bindParam(':commentary', $commentary["comment"]);
        $stmt->execute();
    }catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }
    $db = null;
}

function get_commentaries($productID) {
    try{
        $db = connect_to_db();
        $stmt = $db -> query("SELECT * FROM `commentary` WHERE productID=". $productID["prodID"]);
        $stmt-> execute();
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
    }catch(PDOException $e){
        echo $sql . "<br>" . $e->getMessage();
    }
    $db = null;
    return $rows;

}

function delete_commentaries($comID){
    try{
        $db = connect_to_db();
        $sql = "DELETE FROM `commentary` WHERE commentID=".$comID["commentID"];
        $db->exec($sql);
    }catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }
    $db = null;
}

function edit_commentaries($comment){
    try{
        $newDate = date("Y-m-d H:i:s");
        $db = connect_to_db();
        $sql = "UPDATE `commentary` SET `comment`=:comment,`date`=:Ndate WHERE commentID=:commentID";
        $stmt = $db -> prepare($sql);
        $stmt->bindParam(':comment', $comment["comment"]);
        $stmt->bindParam(':Ndate', $newDate);
        $stmt->bindParam(':commentID', $comment["commentID"]);
        $stmt->execute();
    }catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }
    $db = null;
}

function get_client_by_idproduct($productData){
    try{
        $db = connect_to_db();
        $stmt = $db -> query("SELECT DISTINCT name, firstname from customer 
        join orders ON customer.customerID = orders.customerID 
        join orderdetail on orders.orderID = orderdetail.orderID 
        WHERE orderdetail.productID=".$productData["prodID"]);

        $stmt-> execute();
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
    }catch(PDOException $e){
        echo $sql . "<br>" . $e->getMessage();
    }
    $db = null;
    return $rows;
}

function get_product_sales() {
    try{
        $db = connect_to_db();
        $stmt = $db -> query("SELECT DISTINCT prodName, COUNT(qt) as count FROM product 
        JOIN orderdetail ON product.productID = orderdetail.productID
        JOIN orders ON orderdetail.orderID = orders.orderID
        WHERE DATE(orders.orderDate) > (NOW() - INTERVAL 30 DAY)
        GROUP BY prodName");

        $stmt-> execute();
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
    }catch(PDOException $e){
        echo $sql . "<br>" . $e->getMessage();
    }
    $db = null;
    return $rows;
}
?>