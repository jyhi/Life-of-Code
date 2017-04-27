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
