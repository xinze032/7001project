<?php
// 获取表单提交的数据
$Days = $_POST['Days'];
$People = $_POST['People'];
$Email = $_POST['Email'];
$Scenery = $_POST['Scenery'];
$Food = $_POST['Food'];
$Preference = $_POST['Preference'];

// 连接到 MySQL 数据库
$servername = 'localhost';
$dbname = 'projdata';
$username_db = 'root';
$password_db = '';

$conn = new mysqli($servername, $username_db, $password_db, $dbname);

// 检查连接是否成功
if ($conn->connect_error) {
    die("数据库连接失败: " . $conn->connect_error);
}

// 在这里执行插入数据库的操作，例如：
$sql = "INSERT INTO form (Days, People, Email, Scenery, Food, Preference) VALUES ('" . $conn->real_escape_string($Days) . "', '" . $conn->real_escape_string($People) . "', '" . $conn->real_escape_string($Email) . "', '" . $conn->real_escape_string($Scenery) . "', '" . $conn->real_escape_string($Food) . "' , '" . $conn->real_escape_string($Preference)." )";

if ($conn->query($sql) === TRUE) {
    echo "数据已成功插入到数据库";
    // 数据插入成功后的重定向
    header("Location: test.php");
    exit;

} else {
    echo "插入数据时出错: " . $conn->error;
}

// 关闭数据库连接
$conn->close();
?>
