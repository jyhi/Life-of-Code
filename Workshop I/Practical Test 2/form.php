<!--
  "20% of your code needs comments."

                       _oo0oo_
                      o8888888o
                      88" . "88
                      (| -_- |)
                      0\  =  /0
                    ___/`---'\___
                  .' \\|     |// '.
                 / \\|||  :  |||// \
                / _||||| -:- |||||- \
               |   | \\\  -  /// |   |
               | \_|  ''\---/''  |_/ |
               \  .-\__  '-'  ___/-. /
             ___'. .'  /--.--\  `. .'___
          ."" '<  `.___\_<|>_/___.' >' "".
         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
         \  \ `_.   \_ __\ /__ _/   .-` /  /
     =====`-.____`.___ \_____/___.-`___.-'=====
                       `=---='


     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

               佛祖保佑         永无BUG
-->
<?php
  // foreach ($_REQUEST as $key => $value) {
  //   echo $key . ": " . $value . "<br />";
  // }

  echo "Your ID: ",    $_REQUEST['id'],     "<br />";
  echo "Name: ",       $_REQUEST['name'],   "<br />";
  echo "Address: ",    $_REQUEST['addr'],   "<br />";
  echo "Cell Phone: ", $_REQUEST['phone'],  "<br />";
  echo "You have ",    $_REQUEST['nadult'], " adult(s).<br />";
  echo "You have ",    $_REQUEST['nchild'], " kid(s).<br />";
  echo "You like ";
  if (isset ($_REQUEST['hobbies-singing'])) {
    if (isset ($_REQUEST['hobbies-dancing'])) {
      echo "singing and dancing.<br />";
    } else {
      echo "singing.<br />";
    }
  } elseif (isset ($_REQUEST['hobbies-dancing'])) {
    echo "dancing.<br />";
  } else {
    echo "nothing.<br />";
  }
?>
